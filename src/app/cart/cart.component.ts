import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Product } from 'src/app/products';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items: Product[];
    totalPrice: number;
    totalQuantity: number;

    constructor(
        private cartService: CartService,
    ) {
        this.items = this.cartService.getItems();
        this.totalQuantity = this.cartService.getQuantity();
        this.totalPrice = this.cartService.sumCart();
    }

    ngOnInit() {
        this.cartService.change.subscribe(items => {
            this.items = items;
            this.totalQuantity = this.cartService.getQuantity();
            this.totalPrice = this.cartService.sumCart();
        });
    }

    
}

