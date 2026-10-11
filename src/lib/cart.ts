import { products } from '../data/catalog';

export type CartItem = { slug: string; quantity: number };
export const CART_EVENT = 'robotdog:cart-updated';
export const CART_KEY = 'robotdog.cart.v2';
export const SELECTION_KEY = 'robotdog.selection.v2';
export const CHECKOUT_KEY = 'robotdog.checkout.v2';
export const ORDER_KEY = 'robotdog.order.v2';
type StorageLike = { getItem: (key: string) => string | null; setItem: (key: string, value: string) => void; removeItem: (key: string) => void };
type PreviewWindow = Window & { __robotdogPreviewStorage?: StorageLike; __robotdogPreviewNavigate?: (path: string, replace?: boolean) => void; __robotdogMemory?: Record<string, string>; __robotdogCartHydrated?: boolean; __robotdogStorageFallback?: boolean };

export function navigateTo(path: string, replace = false): void {
  if (typeof window === 'undefined' || !path.startsWith('/') || path.startsWith('//')) return;
  const bridge = (window as PreviewWindow).__robotdogPreviewNavigate;
  if (typeof bridge === 'function') { bridge(path, replace); return; }
  if (replace) window.location.replace(path);
  else window.location.href = path;
}

function previewStorage(): StorageLike | null {
  if (typeof window === 'undefined') return null;
  const own = window as PreviewWindow;
  try {
    const bridge = own.__robotdogPreviewStorage || (window.parent as PreviewWindow).__robotdogPreviewStorage;
    if (bridge) return bridge;
  } catch { /* A cross-origin parent is optional. */ }
  return null;
}

function fallbackStorage(): StorageLike {
  if (typeof window === 'undefined') return { getItem: () => null, setItem: () => {}, removeItem: () => {} };
  const own = window as PreviewWindow;
  const bridge = previewStorage();
  if (bridge) return bridge;
  own.__robotdogMemory ||= {};
  const memory = own.__robotdogMemory;
  return { getItem: key => memory[key] ?? null, setItem: (key, value) => { memory[key] = value; }, removeItem: key => { delete memory[key]; } };
}

export function readStored<T = unknown>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  const own = window as PreviewWindow;
  let raw: string | null = null;
  const preview = previewStorage();
  try { raw = preview ? preview.getItem(key) : own.__robotdogStorageFallback ? fallbackStorage().getItem(key) : window.localStorage.getItem(key); }
  catch { own.__robotdogStorageFallback = true; raw = fallbackStorage().getItem(key); }
  // A quota error may have switched a previous document to the preview bridge.
  if (!raw) raw = fallbackStorage().getItem(key);
  if (!raw) return null;
  try { return JSON.parse(raw) as T; } catch { return null; }
}

export function writeStored(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;
  const raw = JSON.stringify(value);
  const own = window as PreviewWindow;
  const preview = previewStorage();
  if (preview) { preview.setItem(key, raw); return; }
  if (own.__robotdogStorageFallback) { fallbackStorage().setItem(key, raw); return; }
  try { window.localStorage.setItem(key, raw); }
  catch { own.__robotdogStorageFallback = true; fallbackStorage().setItem(key, raw); }
}

export function removeStored(key: string): void {
  if (typeof window === 'undefined') return;
  try { window.localStorage.removeItem(key); } catch { (window as PreviewWindow).__robotdogStorageFallback = true; }
  fallbackStorage().removeItem(key);
}

const quantityFor = (value: unknown) => typeof value === 'number' && Number.isFinite(value) ? Math.min(99, Math.max(1, Math.floor(value))) : 1;
const knownSlug = (slug: unknown): slug is string => typeof slug === 'string' && products.some(product => product.slug === slug && Number.isFinite(product.priceCNY) && product.priceCNY > 0);

export function getCart(): CartItem[] {
  const raw = readStored<unknown>(CART_KEY);
  if (!Array.isArray(raw)) return [];
  const items = new Map<string, number>();
  raw.slice(0, 200).forEach(item => {
    if (!item || typeof item !== 'object' || !knownSlug(item.slug)) return;
    const value = item.quantity;
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 1) return;
    items.set(item.slug, quantityFor((items.get(item.slug) || 0) + quantityFor(value)));
  });
  return [...items].map(([slug, quantity]) => ({ slug, quantity }));
}

function commit(items: CartItem[]): void {
  writeStored(CART_KEY, items);
  window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: { items, count: getCartCount(), total: getCartTotal() } }));
}

export function addToCart(slug: string, quantity = 1): void {
  if (!knownSlug(slug)) return;
  const items = getCart();
  const existing = items.find(item => item.slug === slug);
  if (existing) existing.quantity = quantityFor(existing.quantity + quantityFor(quantity));
  else items.push({ slug, quantity: quantityFor(quantity) });
  const selection = readStored<unknown>(SELECTION_KEY);
  if (Array.isArray(selection) && !selection.includes(slug)) writeStored(SELECTION_KEY, [...selection.filter(knownSlug), slug]);
  commit(items);
}

export function setQuantity(slug: string, quantity: number): void {
  if (!knownSlug(slug)) return;
  commit(getCart().map(item => item.slug === slug ? { slug, quantity: quantityFor(quantity) } : item));
}

export function removeFromCart(slug: string): void { commit(getCart().filter(item => item.slug !== slug)); }
export function clearCart(): void { removeStored(SELECTION_KEY); commit([]); }
export function getCartCount(): number { return getCart().reduce((total, item) => total + item.quantity, 0); }
export function getCartTotal(): number { return getCart().reduce((total, item) => total + products.find(product => product.slug === item.slug)!.priceCNY * item.quantity, 0); }

export function getSelectedCart(): CartItem[] {
  const selection = readStored<unknown>(SELECTION_KEY);
  return getCart().filter(item => !Array.isArray(selection) || selection.includes(item.slug));
}

export function hydrateStorage(): void {
  if (typeof window === 'undefined') return;
  const own = window as PreviewWindow;
  if (!own.__robotdogCartHydrated) {
    own.__robotdogCartHydrated = true;
    window.addEventListener('storage', event => { if (event.key === CART_KEY || event.key === SELECTION_KEY || event.key === null) window.dispatchEvent(new CustomEvent(CART_EVENT)); });
    window.addEventListener('pageshow', () => window.dispatchEvent(new CustomEvent(CART_EVENT)));
  }
  window.dispatchEvent(new CustomEvent(CART_EVENT));
}

export type DemoOrderItem = { slug: string; name: string; priceCNY: number; quantity: number };
export type DemoOrder = { id: string; createdAt: string; status: 'awaiting_demo_payment' | 'demo_complete'; method: 'wechat' | 'alipay'; recipient: string; phone: string; region: string; address: string; invoice: string; note: string; items: DemoOrderItem[] };

export function getDemoOrder(): DemoOrder | null {
  const raw = readStored<DemoOrder>(ORDER_KEY);
  if (!raw || typeof raw.id !== 'string' || !/^RD[0-9A-Z-]{10,45}$/.test(raw.id) || !Array.isArray(raw.items)) return null;
  const items = raw.items.filter(item => item && knownSlug(item.slug) && typeof item.quantity === 'number' && Number.isFinite(item.quantity) && item.quantity >= 1).map(item => {
    const product = products.find(product => product.slug === item.slug)!;
    return { slug: product.slug, name: product.name, priceCNY: product.priceCNY, quantity: quantityFor(item.quantity) };
  });
  if (!items.length) return null;
  return { ...raw, id: raw.id, createdAt: typeof raw.createdAt === 'string' ? raw.createdAt : '', status: raw.status === 'demo_complete' ? 'demo_complete' : 'awaiting_demo_payment', method: raw.method === 'alipay' ? 'alipay' : 'wechat', recipient: typeof raw.recipient === 'string' ? raw.recipient : '', phone: typeof raw.phone === 'string' ? raw.phone : '', region: typeof raw.region === 'string' ? raw.region : '', address: typeof raw.address === 'string' ? raw.address : '', invoice: typeof raw.invoice === 'string' ? raw.invoice : '', note: typeof raw.note === 'string' ? raw.note : '', items };
}

export function getOrderTotal(order: DemoOrder): number { return order.items.reduce((total, item) => total + item.priceCNY * item.quantity, 0); }
