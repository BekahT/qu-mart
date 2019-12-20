import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../../cart.service';
import { Product } from 'src/app/products';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    items: Product[];    
    checkoutForm: FormGroup;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
    ) { 
        this.items = this.cartService.getItems();

        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    } 

    onSubmit(customerData) {
        console.warn('Order has been submitted', customerData);
        console.warn('Items in order', this.items);
    
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }
}

