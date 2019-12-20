import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
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

    sumCart(items) {
        let sum: number = 0;
        items.forEach(function (item) {
            sum += item.price;
        });
        return sum;
    }
}

