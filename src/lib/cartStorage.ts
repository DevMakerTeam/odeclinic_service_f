export interface CartItem {
  id: number;
  title: string;
  description?: string;
  tag?: string;
  price: number;
  discountPrice?: number;
  discountRate?: number;
}

const CART_KEY = 'ode_cart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function addToCart(item: CartItem): boolean {
  const cart = getCart();
  const exists = cart.some((c) => c.id === item.id);
  if (exists) return false;
  localStorage.setItem(CART_KEY, JSON.stringify([...cart, item]));
  return true;
}

export function removeFromCart(itemId: number): void {
  const cart = getCart().filter((c) => c.id !== itemId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function isInCart(itemId: number): boolean {
  return getCart().some((c) => c.id === itemId);
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
}
