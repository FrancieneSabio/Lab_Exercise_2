import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  currentPage = 'home';

  goTo(page: string) {
    this.currentPage = page;
  }

  wines = [
    { name: 'Château Margaux', region: 'Bordeaux', price: 250, vintage: 2015, description: 'A legendary Bordeaux with rich dark fruit and elegant tannins.' },
    { name: 'Opus One', region: 'Napa Valley', price: 300, vintage: 2018, description: 'A prestigious blend from Napa Valley, smooth and balanced.' },
    { name: 'Barolo', region: 'Piedmont', price: 180, vintage: 2017, description: 'Known as the king of wines, deep and complex.' },
    { name: 'Rioja Reserva', region: 'La Rioja', price: 120, vintage: 2019, description: 'Spanish classic with cherry and leather notes.' },
    { name: 'Zinfandel', region: 'Sonoma', price: 90, vintage: 2020, description: 'Bold and fruity with a hint of spice.' },
    { name: 'Malbec', region: 'Mendoza', price: 100, vintage: 2018, description: 'Argentinian gem, velvety with dark berry flavors.' }
  ];


  cart: any[] = [];

  addToCart(w: any) {
    let found = this.cart.find(i => i.name === w.name);
    if (found) {
      found.qty++;
    } else {
      this.cart.push({ ...w, qty: 1 });
    }
  }

  removeFromCart(w: any) {
    this.cart = this.cart.filter(i => i.name !== w.name);
  }

  increaseQty(w: any) {
    w.qty++;
  }

  decreaseQty(w: any) {
    if (w.qty > 1) {
      w.qty--;
    } else {
      this.removeFromCart(w);
    }
  }

  getTotalItems(): number {
    return this.cart.reduce((sum, i) => sum + i.qty, 0);
  }

  getTotal(): number {
    return this.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  checkout() {
    if (this.cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Order placed! Total: $' + this.getTotal());
    this.cart = [];
  }
}