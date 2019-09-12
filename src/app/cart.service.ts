import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  items = [];

  addToCart(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() { 
    this.items = [];
    return this.items;
  }
}