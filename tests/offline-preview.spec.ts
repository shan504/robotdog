import { test as base, expect, type Page, type FrameLocator } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { products, carProducts, accessoryProducts, formatPrice } from '../src/data/catalog';

const robot = carProducts.find(product => product.slug === 'sprint-pro')!;
const extraCar = carProducts.find(product => product.slug === 'rover-pro')!;
const accessory = accessoryProducts[0];
const CART = 'robotcar.cart.v2';
const SELECTION = 'robotcar.selection.v2';

const test = base.extend({
  page: async ({ page, context }, use) => {
    const errors: string[] = [];
    const requests: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => { if (/^https?:/.test(request.url())) requests.push(request.url()); });
    await context.setOffline(true);
    await use(page);
    expect(errors, 'The exact downloadable HTML must work without JavaScript errors').toEqual([]);
    expect(requests, 'The single-file preview must never depend on a network request').toEqual([]);
  },
});

async function openPreview(page: Page) {
  const html = await readFile(new URL('../RobotCar-preview.html', import.meta.url), 'utf8');
  expect(Buffer.byteLength(html)).toBeGreaterThan(1_000_000);
  await page.setContent(html, { waitUntil: 'load' });
  const frame = page.frameLocator('#website');
  await expect(frame.locator('main h1')).toBeVisible();
  return frame;
}

async function navigate(page: Page, frame: FrameLocator, path: string, ready: string) {
  await page.evaluate(path => { location.hash = path; }, path);
  await expect(frame.locator(ready)).toBeVisible();
}

async function expectEmbeddedImage(frame: FrameLocator, selector: string) {
  const image = frame.locator(selector).first();
  await expect(image).toHaveAttribute('src', /^data:image\//);
  await image.scrollIntoViewIfNeeded();
  await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
}

test('downloadable HTML supports deep-linked families, accessory filters and real product detail navigation while disconnected', async ({ page }) => {
  test.setTimeout(90_000);
  const frame = await openPreview(page);
  await expectEmbeddedImage(frame, 'main img');
  await navigate(page, frame, '/products/?family=rover', '#product-list');
  await expect(frame.locator('#current-family')).toContainText('Rover');
  await expect(frame.locator('#product-list [data-product-card]:visible')).toHaveCount(carProducts.filter(product => product.family === 'rover').length);
  await frame.locator(`#product-list [data-slug="${extraCar.slug}"] .shop-card-image`).click();
  await expect(frame.locator('main h1')).toHaveText(extraCar.name);
  await expectEmbeddedImage(frame, '#detail-main-image');
  await expect(frame.locator('.specification-table')).toContainText('车身尺寸与驱动');
  await navigate(page, frame, '/products/#accessories', '#product-list');
  await expect(frame.locator('#product-list [data-product-card]:visible')).toHaveCount(accessoryProducts.length);
  await frame.locator('[data-family-filter="sensing"]').click();
  await expect(frame.locator('#product-list [data-product-card]:visible')).toHaveCount(accessoryProducts.filter(product => product.family === 'sensing').length);
  await frame.getByRole('searchbox').fill('ZZZ-no-match');
  await expect(frame.locator('#catalog-empty')).toBeVisible();
  await frame.locator('#reset-search').click();
  await expect(frame.locator('#product-list [data-product-card]:visible')).toHaveCount(carProducts.length);
});

test('single-file cart persists between iframe pages through checkout, payment demo and downloaded order result', async ({ page }) => {
  test.setTimeout(90_000);
  const frame = await openPreview(page);
  await frame.getByRole('navigation', { name: '主导航', exact: true }).getByRole('link', { name: '产品系列' }).click();
  await expect(frame.locator('#product-list [data-product-card]:visible')).toHaveCount(carProducts.length);
  await frame.locator(`#product-list [data-add-to-cart="${robot.slug}"]`).click();
  await frame.locator(`#product-list [data-add-to-cart="${extraCar.slug}"]`).click();
  await frame.locator('#view-accessories').click();
  await frame.locator(`#product-list [data-add-to-cart="${accessory.slug}"]`).click();
  await expect(frame.locator('#cart-count')).toHaveText('3');
  await frame.locator('#header-cart').click();
  await expect(frame.locator('[data-cart-row]:visible')).toHaveCount(3);
  await frame.locator(`[data-quantity-plus="${robot.slug}"]`).click();
  await expect(frame.locator(`[data-quantity="${robot.slug}"]`)).toHaveValue('2');
  await expect(frame.locator('#cart-count')).toHaveText('4');
  await frame.locator(`[data-select-item="${extraCar.slug}"]`).uncheck();
  const total = robot.priceCNY * 2 + accessory.priceCNY;
  await expect(frame.locator('#cart-total')).toHaveText(formatPrice(total));
  // Leaving and returning re-creates the iframe document; both state and selection must survive.
  await frame.getByRole('navigation', { name: '主导航', exact: true }).getByRole('link', { name: '关于我们' }).click();
  await expect(frame.locator('main h1')).toBeVisible();
  await frame.locator('#header-cart').click();
  await expect(frame.locator(`[data-quantity="${robot.slug}"]`)).toHaveValue('2');
  await expect(frame.locator(`[data-select-item="${extraCar.slug}"]`)).not.toBeChecked();
  await frame.locator('#go-checkout').click();
  await expect(frame.locator('#checkout-form')).toBeVisible();
  await expect(frame.locator('[data-summary-item]:visible')).toHaveCount(2);
  await expect(frame.locator('#checkout-total')).toHaveText(formatPrice(total));
  await frame.locator('#submit-order').click();
  expect(await frame.locator('#checkout-form').evaluate((form: HTMLFormElement) => form.checkValidity())).toBe(false);
  await frame.locator('[name="recipient"]').fill('离线测试收货人');
  await frame.locator('[name="phone"]').fill('13800000000');
  await frame.locator('[name="region"]').fill('浙江省 杭州市 滨江区');
  await frame.locator('[name="address"]').fill('测试实验室 101 室');
  await frame.locator('[name="agree"]').check();
  await frame.locator('input[name="method"][value="alipay"]').check();
  await frame.locator('#submit-order').click();
  await expect(frame.locator('#payment-layout')).toBeVisible();
  await expect(frame.locator('#payment-total')).toHaveText(formatPrice(total));
  await expect(frame.locator('#selected-method-label')).toHaveText('支付宝支付演示');
  await expectEmbeddedImage(frame, '[data-payment-item]:visible img');
  await frame.locator('#simulate-payment').click();
  await expect(frame.locator('#success-result')).toBeVisible();
  await expect(frame.locator('#result-total')).toHaveText(formatPrice(total));
  await expect(frame.locator('[data-result-item]:visible')).toHaveCount(2);
  await expect(frame.locator('#success-result')).toContainText('未发生真实扣款');
  await expect(frame.locator('#result-method')).toContainText('支付宝');
  const downloadPromise = page.waitForEvent('download');
  await frame.locator('#download-demo-order').click();
  const download = await downloadPromise;
  const text = await readFile((await download.path())!, 'utf8');
  expect(text).toContain(robot.name);
  expect(text).toContain(accessory.name);
  expect(text).toContain('演示');
  await frame.locator('#header-cart').click();
  await expect(frame.locator('[data-cart-row]:visible')).toHaveCount(1);
  await expect(frame.locator(`[data-cart-row="${extraCar.slug}"]`)).toBeVisible();
  await expect(frame.locator('#cart-count')).toHaveText('1');
  const cart = await page.evaluate(key => JSON.parse((window as unknown as { __robotcarPreviewStorage: { getItem(key: string): string } }).__robotcarPreviewStorage.getItem(key)), CART);
  expect(cart).toEqual([{ slug: extraCar.slug, quantity: 1 }]);
});

test('offline mobile navigation fits the viewport and malformed bridge storage recovers gracefully', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const frame = await openPreview(page);
  await frame.getByRole('button', { name: '打开导航菜单' }).click();
  await expect(frame.getByRole('navigation', { name: '移动主导航' })).toBeVisible();
  await frame.getByRole('navigation', { name: '移动主导航' }).getByRole('link', { name: '产品系列' }).click();
  await expect(frame.locator('#product-list [data-product-card]:visible')).toHaveCount(carProducts.length);
  expect(await frame.locator('html').evaluate(element => element.scrollWidth)).toBeLessThanOrEqual(391);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(391);
  await page.evaluate(({ cart, selection }) => {
    const storage = (window as unknown as { __robotcarPreviewStorage: { setItem(key: string, value: string): void } }).__robotcarPreviewStorage;
    storage.setItem(cart, '{broken json');
    storage.setItem(selection, '["stale-product"]');
  }, { cart: CART, selection: SELECTION });
  await frame.locator('#header-cart').click();
  await expect(frame.locator('#empty-cart')).toBeVisible();
  await frame.locator('#empty-cart a').click();
  await expect(frame.locator('#product-list')).toBeVisible();
  await frame.locator(`#product-list [data-add-to-cart="${robot.slug}"]`).click();
  await expect(frame.locator('#cart-count')).toHaveText('1');
  await frame.locator('#header-cart').click();
  await expect(frame.locator('[data-cart-row]:visible')).toHaveCount(1);
  await expect(frame.locator(`[data-select-item="${robot.slug}"]`)).toBeChecked();
});
