import { test as base, expect, type Page } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { products, robotProducts, accessoryProducts, families, formatPrice } from '../src/data/catalog';
import { solutions } from '../src/data/solutions';
import { articles } from '../src/data/articles';

const CART = 'robotdog.cart.v2';
const SELECTION = 'robotdog.selection.v2';
const ORDER = 'robotdog.order.v2';
const sampleRobot = robotProducts.find(product => product.slug === 'go2-pro')!;
const secondRobot = robotProducts.find(product => product.slug === 'as2-pro') || robotProducts[4];
const sampleAccessory = accessoryProducts[0];
const publicPaths = ['/', '/products/', '/solutions/', '/journal/', '/about/', '/privacy/', ...products.map(product => `/products/${product.slug}/`), ...solutions.map(solution => `/solutions/${solution.slug}/`), ...articles.map(article => `/journal/${article.slug}/`)];

const test = base.extend({
  page: async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await use(page);
    expect(errors, 'The storefront must not throw uncaught JavaScript errors').toEqual([]);
  },
});

async function openPage(page: Page, path: string) {
  const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
  expect(response?.status(), `${path} should load successfully`).toBe(200);
  await expect(page.locator('main')).toBeVisible();
  await expect(page.locator('main h1:visible')).toHaveCount(1);
}

async function seedStorage(page: Page, entries: Record<string, unknown>) {
  await page.goto('/products/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(entries => {
    localStorage.clear();
    for (const [key, value] of Object.entries(entries)) localStorage.setItem(key, JSON.stringify(value));
  }, entries);
}

function demoOrder(items = [{ slug: sampleRobot.slug, quantity: 2 }]) {
  return {
    id: 'RD20261011-QATEST1234', createdAt: '2026-10-11T03:00:00.000Z', status: 'awaiting_demo_payment', method: 'wechat',
    recipient: '测试收货人', phone: '13800000000', region: '浙江省 杭州市 滨江区', address: '机器人路 1 号测试实验室', invoice: '', note: '浏览器演示测试',
    items: items.map(item => { const product = products.find(product => product.slug === item.slug)!; return { ...item, name: product.name, priceCNY: product.priceCNY }; }),
  };
}

async function expectLoadedImage(page: Page, selector: string) {
  const image = page.locator(selector).first();
  await image.scrollIntoViewIfNeeded();
  await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
}

async function fillCheckout(page: Page) {
  await page.locator('[name="recipient"]').fill('测试收货人');
  await page.locator('[name="phone"]').fill('13800000000');
  await page.locator('[name="region"]').fill('浙江省 杭州市 滨江区');
  await page.locator('[name="address"]').fill('机器人路 1 号测试实验室');
  await page.locator('[name="agree"]').check();
}

test('home has new navigation, loaded local imagery and product navigation', async ({ page }) => {
  await openPage(page, '/');
  const navigation = page.getByRole('navigation', { name: '主导航', exact: true });
  await expect(navigation.getByRole('link')).toHaveCount(4);
  await expect(navigation.getByRole('link', { name: '探索与未来' })).toBeVisible();
  await expectLoadedImage(page, 'main img');
  const cartOrder = await page.locator('.header-actions').evaluate(element => {
    const cart = element.querySelector('#header-cart')!;
    const inquiry = element.querySelector('[data-inquiry]')!;
    return Boolean(cart.compareDocumentPosition(inquiry) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  expect(cartOrder, 'The cart must appear before the inquiry control').toBe(true);
  await navigation.getByRole('link', { name: '产品系列' }).click();
  await expect(page).toHaveURL(/\/products\/$/);
  await expect(page.locator('.catalog-sidebar')).toBeVisible();
});

test('catalog shows at least 20 robots with a left sidebar and readable names, prices, descriptions and cart icons', async ({ page }) => {
  await openPage(page, '/products/');
  expect(robotProducts.length).toBeGreaterThanOrEqual(20);
  expect(accessoryProducts.length).toBeGreaterThanOrEqual(8);
  const cards = page.locator('#product-list [data-product-card]:visible');
  await expect(cards).toHaveCount(robotProducts.length);
  const sidebar = await page.locator('.catalog-sidebar').boundingBox();
  const listing = await page.locator('#product-list').boundingBox();
  expect(sidebar!.x + sidebar!.width).toBeLessThan(listing!.x);
  for (const product of robotProducts) {
    const card = page.locator(`#product-list [data-product-card][data-slug="${product.slug}"]`);
    await expect(card.locator('h3')).toHaveText(product.name);
    await expect(card.locator('.shop-card-price')).toContainText(formatPrice(product.priceCNY));
    await expect(card.locator('.shop-card-content p')).toHaveText(product.shortDescription);
    await expect(card.locator('[data-add-to-cart]')).toHaveAttribute('data-add-to-cart', product.slug);
    await expect(card.locator('[data-add-to-cart] svg')).toHaveCount(1);
    await expect(card.locator('a')).toHaveAttribute('href', `/products/${product.slug}/`);
  }
  for (const source of await cards.locator('img').evaluateAll(images => images.map(image => image.getAttribute('src')))) expect(source).toMatch(/^\/images\/catalog\//);
  await expectLoadedImage(page, '#product-list img');
});

test('catalog family filter, deep links, search, empty search and accessory categories work', async ({ page }) => {
  const family = families.find(family => family.slug === sampleRobot.family)!;
  await openPage(page, '/products/');
  await page.locator(`[data-family-filter="${family.slug}"]`).click();
  await expect(page).toHaveURL(new RegExp(`family=${family.slug}`));
  await expect(page.locator('#product-list [data-product-card]:visible')).toHaveCount(robotProducts.filter(product => product.family === family.slug).length);
  await expect(page.locator(`[data-family-filter="${family.slug}"]`)).toHaveAttribute('aria-pressed', 'true');
  await page.reload();
  await expect(page.locator('#current-family')).toContainText(family.name);
  await page.getByRole('searchbox').fill(sampleRobot.name);
  const matchingNames = robotProducts.filter(product => product.family === family.slug && `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase().includes(sampleRobot.name.toLowerCase())).map(product => product.name);
  await expect(page.locator('#product-list [data-product-card]:visible')).toHaveCount(matchingNames.length);
  await expect(page.locator('#product-list h3:visible')).toHaveText(matchingNames);
  await page.getByRole('searchbox').fill('ZZZ-no-such-robot');
  await expect(page.locator('#catalog-empty')).toBeVisible();
  await page.locator('#reset-search').click();
  await expect(page.getByRole('searchbox')).toHaveValue('');
  await expect(page.locator('#product-list [data-product-card]:visible')).toHaveCount(robotProducts.length);
  await page.locator('#view-accessories').click();
  await expect(page.locator('#product-list [data-product-card]:visible')).toHaveCount(accessoryProducts.length);
  await expect(page.locator('#accessory-rail')).not.toBeVisible();
  await page.locator('[data-family-filter="power"]').click();
  await expect(page.locator('#product-list [data-product-card]:visible')).toHaveCount(accessoryProducts.filter(product => product.family === 'power').length);
  await openPage(page, '/products/#accessories');
  await expect(page.locator('#product-list [data-product-card]:visible')).toHaveCount(accessoryProducts.length);
});

for (const product of [sampleRobot, secondRobot, sampleAccessory]) {
  test(`${product.slug} card opens full specification, configuration, kit and variants`, async ({ page }) => {
    await openPage(page, `/products/?family=${product.family}`);
    await page.locator(`#product-list [data-slug="${product.slug}"] .shop-card-image`).click();
    await expect(page).toHaveURL(`/products/${product.slug}/`);
    await expect(page.locator('main h1')).toHaveText(product.name);
    await expect(page.locator('.detail-price')).toContainText(formatPrice(product.priceCNY));
    await expectLoadedImage(page, '#detail-main-image');
    for (const stat of product.keyStats) await expect(page.locator('.key-stat-grid')).toContainText(stat.value);
    const table = page.locator('.specification-table');
    expect(await table.locator('tbody tr').count()).toBeGreaterThanOrEqual(10);
    for (const group of product.specificationGroups) {
      await expect(table).toContainText(group.name);
      for (const spec of group.rows) await expect(table).toContainText(spec.value);
    }
    expect(product.specificationGroups.flatMap(group => group.rows).filter(row => /\d/.test(row.value)).length).toBeGreaterThanOrEqual(5);
    for (const item of product.inBox) await expect(page.locator('.inbox-copy')).toContainText(item);
    const variants = products.filter(variant => variant.family === product.family && variant.kind === product.kind);
    await expect(page.locator('.variant-option')).toHaveCount(variants.length);
    for (const variant of variants) await expect(page.locator(`.variant-option[href="/products/${variant.slug}/"]`)).toContainText(formatPrice(variant.priceCNY));
    const otherVariant = variants.find(variant => variant.slug !== product.slug);
    if (otherVariant) {
      await page.locator(`.variant-option[href="/products/${otherVariant.slug}/"]`).click();
      await expect(page.locator('main h1')).toHaveText(otherVariant.name);
    }
  });
}

test('cart buttons add robots and accessories, header badge persists across pages and refresh', async ({ page }) => {
  await openPage(page, '/products/');
  await page.locator(`#product-list [data-add-to-cart="${sampleRobot.slug}"]`).click();
  await expect(page.locator('#cart-count')).toHaveText('1');
  await expect(page.locator('#cart-toast')).toContainText(sampleRobot.name);
  await page.locator(`#product-list [data-add-to-cart="${secondRobot.slug}"]`).click();
  await page.locator('#view-accessories').click();
  await page.locator(`#product-list [data-add-to-cart="${sampleAccessory.slug}"]`).click();
  await expect(page.locator('#cart-count')).toHaveText('3');
  await page.reload();
  await expect(page.locator('#cart-count')).toHaveText('3');
  await page.locator('#header-cart').click();
  await expect(page).toHaveURL('/orders/');
  await expect(page.locator('[data-cart-row]:visible')).toHaveCount(3);
  for (const product of [sampleRobot, secondRobot, sampleAccessory]) await expect(page.locator(`[data-cart-row="${product.slug}"]`)).toContainText(product.name);
  await expect(page.locator('#cart-total')).toHaveText(formatPrice(sampleRobot.priceCNY + secondRobot.priceCNY + sampleAccessory.priceCNY));
});

test('orders quantity buttons, inputs, selection, totals and removals stay consistent', async ({ page }) => {
  await seedStorage(page, { [CART]: [{ slug: sampleRobot.slug, quantity: 1 }, { slug: secondRobot.slug, quantity: 1 }, { slug: sampleAccessory.slug, quantity: 1 }] });
  await openPage(page, '/orders/');
  const quantity = page.locator(`[data-quantity="${sampleRobot.slug}"]`);
  await expect(page.locator(`[data-quantity-minus="${sampleRobot.slug}"]`)).toBeDisabled();
  await page.locator(`[data-quantity-plus="${sampleRobot.slug}"]`).click();
  await expect(quantity).toHaveValue('2');
  await page.locator(`[data-quantity-minus="${sampleRobot.slug}"]`).click();
  await expect(quantity).toHaveValue('1');
  await quantity.fill('3');
  await quantity.blur();
  await expect(page.locator(`[data-subtotal="${sampleRobot.slug}"]`)).toHaveText(formatPrice(sampleRobot.priceCNY * 3));
  await expect(page.locator('#selected-count')).toHaveText('5');
  await expect(page.locator('#cart-count')).toHaveText('5');
  await page.locator(`[data-select-item="${secondRobot.slug}"]`).uncheck();
  await expect(page.locator('#cart-total')).toHaveText(formatPrice(sampleRobot.priceCNY * 3 + sampleAccessory.priceCNY));
  expect(await page.locator('#select-all').evaluate((node: HTMLInputElement) => node.indeterminate)).toBe(true);
  await page.reload();
  await expect(page.locator(`[data-select-item="${secondRobot.slug}"]`)).not.toBeChecked();
  await page.locator(`[data-remove-item="${sampleAccessory.slug}"]`).click();
  await expect(page.locator(`[data-cart-row="${sampleAccessory.slug}"]`)).not.toBeVisible();
  await expect(page.locator('#cart-total')).toHaveText(formatPrice(sampleRobot.priceCNY * 3));
  // A partial selection is unchecked + indeterminate; select all before toggling it off.
  await page.locator('#select-all').check();
  await expect(page.locator('#selected-count')).toHaveText('4');
  await page.locator('#select-all').uncheck();
  await expect(page.locator('#go-checkout')).toBeDisabled();
  await expect(page.locator('#cart-total')).toHaveText('¥0');
  await page.locator('#select-all').check();
  await page.locator('#remove-selected').click();
  await expect(page.locator('#empty-cart')).toBeVisible();
  await expect(page.locator('#cart-count')).not.toBeVisible();
});

test('checkout requires valid contact/address/agreement and preserves a local draft', async ({ page }) => {
  await seedStorage(page, { [CART]: [{ slug: sampleRobot.slug, quantity: 2 }] });
  await openPage(page, '/checkout/');
  await expect(page.locator('#checkout-total')).toHaveText(formatPrice(sampleRobot.priceCNY * 2));
  await page.locator('#submit-order').click();
  await expect(page).toHaveURL('/checkout/');
  expect(await page.locator('#checkout-form').evaluate((form: HTMLFormElement) => form.checkValidity())).toBe(false);
  await fillCheckout(page);
  await page.locator('[name="phone"]').fill('--- ----');
  await page.locator('#submit-order').click();
  await expect(page).toHaveURL('/checkout/');
  await expect(page.locator('#checkout-error')).toContainText('有效联系电话');
  await page.locator('[name="phone"]').fill('13800000000');
  await page.locator('[name="recipient"]').fill('    ');
  await page.locator('#submit-order').click();
  await expect(page.locator('#checkout-error')).toContainText('不能只有空格');
  await page.locator('[name="recipient"]').fill('测试收货人');
  await page.reload();
  await expect(page.locator('[name="recipient"]')).toHaveValue('测试收货人');
  await expect(page.locator('[name="phone"]')).toHaveValue('13800000000');
  await expect(page.locator('[name="agree"]')).not.toBeChecked();
});

test('selected products go through checkout, chosen payment demo and downloadable result without a real transaction', async ({ page }) => {
  const posts: string[] = [];
  page.on('request', request => { if (request.method() === 'POST') posts.push(request.url()); });
  await seedStorage(page, { [CART]: [{ slug: sampleRobot.slug, quantity: 2 }, { slug: secondRobot.slug, quantity: 1 }, { slug: sampleAccessory.slug, quantity: 1 }] });
  await openPage(page, '/orders/');
  await page.locator(`[data-select-item="${secondRobot.slug}"]`).uncheck();
  await page.locator('#go-checkout').click();
  await expect(page).toHaveURL('/checkout/');
  await expect(page.locator('[data-summary-item]:visible')).toHaveCount(2);
  await expect(page.locator(`[data-summary-item="${secondRobot.slug}"]`)).not.toBeVisible();
  const total = sampleRobot.priceCNY * 2 + sampleAccessory.priceCNY;
  await expect(page.locator('#checkout-total')).toHaveText(formatPrice(total));
  await fillCheckout(page);
  await page.locator('input[name="method"][value="alipay"]').check();
  await page.locator('#submit-order').click();
  await expect(page).toHaveURL('/payment/');
  await expect(page.locator('#payment-total')).toHaveText(formatPrice(total));
  await expect(page.locator('#selected-method-label')).toHaveText('支付宝支付演示');
  await expect(page.locator('[data-payment-item]:visible')).toHaveCount(2);
  await expect(page.locator('input[name="pay-method"][value="alipay"]')).toBeChecked();
  await page.locator('input[name="pay-method"][value="wechat"]').check();
  await expect(page.locator('#selected-method-label')).toHaveText('微信支付演示');
  await page.reload();
  await expect(page.locator('input[name="pay-method"][value="wechat"]')).toBeChecked();
  // Same-product items added after order creation must remain after this order completes.
  await page.evaluate(({ key, slug }) => {
    const cart = JSON.parse(localStorage.getItem(key)!);
    cart.find((item: { slug: string; quantity: number }) => item.slug === slug).quantity += 1;
    localStorage.setItem(key, JSON.stringify(cart));
  }, { key: CART, slug: sampleRobot.slug });
  await page.locator('#simulate-payment').click();
  await expect(page).toHaveURL('/orders/success/');
  await expect(page.locator('#success-result')).toBeVisible();
  await expect(page.locator('#result-total')).toHaveText(formatPrice(total));
  await expect(page.locator('#result-method')).toContainText('微信');
  await expect(page.locator('[data-result-item]:visible')).toHaveCount(2);
  await expect(page.locator('#success-result')).toContainText('未发生真实扣款');
  await expect(page.locator('#success-result')).toContainText('不会创建真实交易');
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-demo-order').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/RobotDog.*\.txt$/);
  const text = await readFile((await download.path())!, 'utf8');
  expect(text).toContain(sampleRobot.name);
  expect(text).toContain(sampleAccessory.name);
  expect(text).toContain('演示');
  expect(posts, 'Preview checkout must not submit a real order or payment').toEqual([]);
  await openPage(page, '/orders/');
  await expect(page.locator('[data-cart-row]:visible')).toHaveCount(2);
  await expect(page.locator(`[data-quantity="${sampleRobot.slug}"]`)).toHaveValue('1');
  await expect(page.locator(`[data-quantity="${secondRobot.slug}"]`)).toHaveValue('1');
  await expect(page.locator(`[data-cart-row="${sampleAccessory.slug}"]`)).not.toBeVisible();
  await expect(page.locator('#cart-count')).toHaveText('2');
});

test('empty, stale and malformed browser storage presents safe empty states', async ({ page }) => {
  await seedStorage(page, {});
  for (const [path, selector] of [['/orders/', '#empty-cart'], ['/checkout/', '#no-order'], ['/payment/', '#missing-payment'], ['/orders/success/', '#incomplete-result']]) {
    await openPage(page, path);
    await expect(page.locator(selector)).toBeVisible();
  }
  await page.evaluate(({ cart, selection, order }) => { localStorage.setItem(cart, '{broken json'); localStorage.setItem(selection, '"bad selection"'); localStorage.setItem(order, '{broken json'); }, { cart: CART, selection: SELECTION, order: ORDER });
  await openPage(page, '/orders/');
  await expect(page.locator('#empty-cart')).toBeVisible();
  await openPage(page, '/payment/');
  await expect(page.locator('#missing-payment')).toBeVisible();
  await seedStorage(page, { [CART]: [{ slug: 'removed-product', quantity: 2 }, { slug: sampleRobot.slug, quantity: -1 }, { slug: sampleAccessory.slug, quantity: '99' }], [ORDER]: { id: 'forged', items: [{ slug: 'removed-product', quantity: 1 }] } });
  await openPage(page, '/orders/');
  await expect(page.locator('#empty-cart')).toBeVisible();
  await openPage(page, '/orders/success/');
  await expect(page.locator('#incomplete-result')).toBeVisible();
});

test('corrupted quantities are bounded, duplicate cart entries merge and catalogue prices are authoritative', async ({ page }) => {
  const order = demoOrder();
  order.items[0].name = 'forged name';
  order.items[0].priceCNY = 1;
  await seedStorage(page, { [CART]: [{ slug: sampleRobot.slug, quantity: 1.9 }, { slug: sampleRobot.slug, quantity: 2 }, { slug: sampleAccessory.slug, quantity: 1000 }], [ORDER]: order });
  await openPage(page, '/orders/');
  await expect(page.locator('[data-cart-row]:visible')).toHaveCount(2);
  await expect(page.locator(`[data-quantity="${sampleRobot.slug}"]`)).toHaveValue('3');
  await expect(page.locator(`[data-quantity="${sampleAccessory.slug}"]`)).toHaveValue('99');
  await expect(page.locator(`[data-quantity-plus="${sampleAccessory.slug}"]`)).toBeDisabled();
  await expect(page.locator('#cart-total')).toHaveText(formatPrice(sampleRobot.priceCNY * 3 + sampleAccessory.priceCNY * 99));
  await openPage(page, '/payment/');
  await expect(page.locator('#payment-total')).toHaveText(formatPrice(sampleRobot.priceCNY * 2));
  await expect(page.locator(`[data-payment-item="${sampleRobot.slug}"]`)).toContainText(sampleRobot.name);
});

test('applications, future stories and about content use loaded pictures and navigate to substantive pages', async ({ page }) => {
  expect(solutions.length).toBeGreaterThanOrEqual(6);
  expect(articles.length).toBeGreaterThanOrEqual(9);
  await openPage(page, '/solutions/');
  await expectLoadedImage(page, 'main img');
  for (const solution of solutions) {
    await openPage(page, '/solutions/');
    await page.locator(`main a[href="/solutions/${solution.slug}/"]`).first().click();
    await expect(page).toHaveURL(`/solutions/${solution.slug}/`);
    await expect(page.locator('main')).toContainText(solution.description);
    expect(await page.locator('main h2').count()).toBeGreaterThanOrEqual(4);
    await expectLoadedImage(page, '.application-hero img');
  }
  await openPage(page, '/journal/');
  await expect(page.getByRole('navigation', { name: '主导航', exact: true })).not.toContainText('探索与洞见');
  await expect(page.locator('[data-article-group]:visible')).toHaveCount(articles.length);
  await page.locator('[data-article-filter="1"]').click();
  expect(await page.locator('[data-article-group]:visible').count()).toBeGreaterThanOrEqual(6);
  await expect(page.locator('[data-article-group="2"]:visible')).toHaveCount(0);
  await page.locator('[data-article-filter="0"]').click();
  await expect(page.locator('[data-article-group]:visible')).toHaveCount(articles.length);
  for (const article of articles.slice(0, 2)) {
    await page.locator(`.future-story-card[href="/journal/${article.slug}/"]`).click();
    await expect(page.locator('main h1')).toHaveText(article.title);
    await expectLoadedImage(page, 'main img');
    await expect(page.locator('.insight-prose h2')).toHaveCount(article.sections.length);
    await page.locator('.insight-toc nav a').first().click();
    await expect(page).toHaveURL(/#section-1$/);
    await openPage(page, '/journal/');
  }
  await openPage(page, '/about/');
  expect(await page.locator('main img').count()).toBeGreaterThanOrEqual(3);
  expect(await page.locator('main svg').count()).toBeGreaterThanOrEqual(6);
  expect((await page.locator('main').innerText()).length).toBeGreaterThan(1000);
  await expectLoadedImage(page, 'main img');
});

test('inquiry validates locally and downloads the product request without submitting it', async ({ page }) => {
  const posts: string[] = [];
  page.on('request', request => { if (request.method() === 'POST') posts.push(request.url()); });
  await openPage(page, '/');
  await page.locator('.header-actions [data-inquiry]').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: '生成询价单' }).click();
  await expect(page.locator('#inquiry-result')).not.toBeVisible();
  await dialog.getByLabel('你的称呼').fill('测试客户');
  await dialog.getByLabel('联系邮箱').fill('buyer@example.com');
  await dialog.getByLabel('感兴趣的产品').selectOption(sampleRobot.name);
  await dialog.getByLabel('使用需求').fill('高校机器人课程，希望了解开发接口与配置。');
  await dialog.getByRole('button', { name: '生成询价单' }).click();
  await expect(page.locator('#inquiry-summary')).toContainText(sampleRobot.name);
  await expect(page.locator('#inquiry-summary')).toContainText('尚未发送');
  const downloadPromise = page.waitForEvent('download');
  await dialog.getByRole('button', { name: '下载询价单' }).click();
  const download = await downloadPromise;
  expect(await readFile((await download.path())!, 'utf8')).toContain(sampleRobot.name);
  expect(posts).toEqual([]);
  await dialog.getByRole('button', { name: '关闭询价窗口' }).click();
  await expect(dialog).not.toBeVisible();
});

test('all public pages have distinct SEO metadata, correct sitemap coverage, working internal links and local assets', async ({ page, request, baseURL }) => {
  test.setTimeout(180_000);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  expect(new Set(urls).size).toBe(urls.length);
  expect(new Set(urls)).toEqual(new Set(publicPaths.map(path => `https://www.robotdog.com${path}`)));
  expect(urls.some(url => /\/(orders|checkout|payment)\//.test(url))).toBe(false);
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Sitemap: https://www.robotdog.com/sitemap.xml');
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const resources = new Map<string, boolean>();
  for (const path of publicPaths) {
    await openPage(page, path);
    const title = await page.title();
    expect(title, path).toContain('RobotDog');
    expect(titles.has(title), `Duplicate title on ${path}`).toBe(false);
    titles.add(title);
    const description = (await page.locator('meta[name="description"]').getAttribute('content'))!;
    expect(description.length, `${path} needs a useful description`).toBeGreaterThan(20);
    expect(descriptions.has(description), `Duplicate description on ${path}`).toBe(false);
    descriptions.add(description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.robotdog.com${path}`);
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow');
    const content = await page.evaluate(() => ({
      links: [...document.querySelectorAll<HTMLAnchorElement>('a[href]')].map(link => link.href),
      images: [...document.querySelectorAll<HTMLImageElement>('img[src]')].map(image => ({ src: image.src, alt: image.getAttribute('alt') })),
      scripts: [...document.querySelectorAll<HTMLScriptElement>('script[src]')].map(script => script.src),
      styles: [...document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')].map(link => link.href),
      schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map(script => script.textContent),
    }));
    for (const schema of content.schemas) expect(() => JSON.parse(schema!)).not.toThrow();
    for (const href of content.links) {
      const target = new URL(href);
      if (target.origin !== new URL(baseURL!).origin) continue;
      resources.set(target.pathname + target.search, false);
      // This hash is a supported catalog category route, verified by the filter test.
      const categoryRoute = target.pathname === '/products/' && target.hash === '#accessories';
      if (target.pathname === path && target.hash && !categoryRoute) expect(await page.locator(`[id="${decodeURIComponent(target.hash.slice(1))}"]`).count(), `${path} has missing ${target.hash}`).toBeGreaterThan(0);
    }
    for (const image of content.images) {
      expect(image.alt, `${path}: each image needs explicit alternative text`).not.toBeNull();
      expect(new URL(image.src).origin, `${path}: imagery must be available from the site`).toBe(new URL(baseURL!).origin);
      resources.set(new URL(image.src).pathname, true);
    }
    for (const asset of [...content.scripts, ...content.styles]) if (new URL(asset).origin === new URL(baseURL!).origin) resources.set(new URL(asset).pathname, false);
  }
  for (const [path, isImage] of resources) {
    const response = await request.get(path);
    expect(response.status(), `Internal resource ${path} must exist`).toBe(200);
    if (isImage) expect(response.headers()['content-type']).toMatch(/^image\//);
  }
  for (const path of ['/orders/', '/checkout/', '/payment/', '/orders/success/']) {
    await openPage(page, path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  }
});

const responsivePaths = ['/', '/products/', `/products/${sampleRobot.slug}/`, '/solutions/', '/journal/', '/about/', '/orders/', '/checkout/', '/payment/'];
for (const width of [390, 1440]) {
  test(`${width}px layouts fit every main page and mobile navigation opens and follows links`, async ({ page }) => {
    test.setTimeout(90_000);
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    await seedStorage(page, { [CART]: [{ slug: sampleRobot.slug, quantity: 1 }, { slug: sampleAccessory.slug, quantity: 1 }], [ORDER]: demoOrder() });
    for (const path of responsivePaths) {
      await openPage(page, path);
      const dimensions = await page.evaluate(() => ({ viewport: innerWidth, page: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
      expect(dimensions.page, `${path}: page overflow ${JSON.stringify(dimensions)}`).toBeLessThanOrEqual(width + 1);
      expect(dimensions.body, `${path}: body overflow ${JSON.stringify(dimensions)}`).toBeLessThanOrEqual(width + 1);
      if (width === 390) {
        await page.getByRole('button', { name: '打开导航菜单' }).click();
        const navigation = page.getByRole('navigation', { name: '移动主导航' });
        await expect(navigation).toBeVisible();
        await expect(navigation.getByRole('link')).toHaveCount(5);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), `${path}: opened menu overflow`).toBeLessThanOrEqual(width + 1);
        await navigation.getByRole('link', { name: '产品系列' }).click();
        await expect(page).toHaveURL('/products/');
      }
    }
  });
}
