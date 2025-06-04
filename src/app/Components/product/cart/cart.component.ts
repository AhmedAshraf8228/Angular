import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product';
import {CartService} from '../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalItems = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  increaseQty(item: CartItem): void {
    item.quantity++;
    this.cartService.updateCart(this.cartItems);
    this.calculateTotals();
  }

  decreaseQty(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCart(this.cartItems);
      this.calculateTotals();
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.productId !== item.productId);
    this.cartService.updateCart(this.cartItems);
    this.calculateTotals();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }

  proceedToCheckout(): void {
    alert(`Order placed successfully! ${this.totalItems} items for $${this.totalPrice.toFixed(2)}.`);
    this.clearCart();
  }
}
