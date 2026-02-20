import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  wines = [
    { name: 'Château Margaux', region: 'Bordeaux, France', vintage: 2018, description: 'A bold and elegant red wine.', price: 12000, available: true },
    { name: 'Barolo Riserva', region: 'Piedmont, Italy', vintage: 2016, description: 'Rich with dark fruit and earthy notes.', price: 8500, available: true },
    { name: 'Cloudy Bay Sauvignon', region: 'Marlborough, NZ', vintage: 2022, description: 'Crisp, zesty, and refreshing white.', price: 4500, available: false },
    { name: 'Dom Pérignon', region: 'Champagne, France', vintage: 2013, description: 'Iconic prestige cuvée champagne.', price: 25000, available: true },
    { name: 'Opus One', region: 'Napa Valley, USA', vintage: 2019, description: 'A legendary Napa Cabernet blend.', price: 18000, available: true },
    { name: 'Rioja Gran Reserva', region: 'La Rioja, Spain', vintage: 2015, description: 'Smooth, complex, and aged to perfection.', price: 6000, available: false },
  ];

  cart: any[] = [];

  addToCart(wine: any) {
    if (!wine.available) return;
    const existing = this.cart.find(item => item.name === wine.name);
    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ ...wine, qty: 1 });
    }
    alert(wine.name + ' added to cart!');
  }

  getTotalItems() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}