import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'cart';

  // BehaviorSubject to notify cart updates
  private cartCountSubject = new BehaviorSubject<number>(this.getInitialCount());
  cartCount$ = this.cartCountSubject.asObservable();

  private getInitialCount(): number {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  updateCart(cart: CartItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    this.updateCount(cart);
  }

  addToCart(item: CartItem): void {
    const cart = this.getCart();
    const existingItem = cart.find(p => p.productId === item.productId);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }

    this.updateCart(cart);
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
    this.cartCountSubject.next(0);
  }

  private updateCount(cart: CartItem[]) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCountSubject.next(count);
  }
}
