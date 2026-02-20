import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  currentPage = 'home';
  cart: any[] = [];

  goTo(page: string) {
    this.currentPage = page;
  }

  increaseQty(item: any) { item.qty++; }

  decreaseQty(item: any) {
    if (item.qty > 1) item.qty--;
    else this.removeFromCart(item);
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(c => c.name !== item.name);
  }

  getTotalItems() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  checkout() {
    alert('Thank you! Total: ₱' + this.getTotal());
    this.cart = [];
    this.goTo('home');
  }
}