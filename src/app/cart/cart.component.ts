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

    constructor(
        private cartService: CartService,
    ) {
        this.items = this.cartService.getItems();

        this.totalPrice = this.sumCart(this.items);
    }

    ngOnInit() {
        this.cartService.change.subscribe(items => {
            this.items = items;
        });
    }

    sumCart(items: Product[]) {
        let sum: number = 0;
        items.forEach(item => {
            sum += item.price;
        });
        return sum;
    }
}

