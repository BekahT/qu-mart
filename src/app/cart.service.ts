import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items = []
    @Output() change: EventEmitter<number> = new EventEmitter();

    constructor(
        private http: HttpClient
    ) {} 

    addToCart(product) {
        this.items.push(product);
        this.change.emit(this.items.length);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];        
        this.change.emit(this.items.length);
        return this.items;
    }  

    getShippingPrices() {
        return this.http.get('assets/shipping.json');
    }
}
