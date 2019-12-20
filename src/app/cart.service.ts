import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items = []
    change: Subject<any[]> = new Subject();

    constructor(
        private http: HttpClient
    ) {} 

    addToCart(product) {
        this.items.push(product);
        this.change.next(this.items);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];        
        this.change.next(this.items);
        return this.items;
    }  

    getShippingPrices() {
        return this.http.get('assets/shipping.json');
    }
}
