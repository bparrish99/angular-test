import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

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

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}