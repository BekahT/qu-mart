import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CartService } from '../../cart.service';
import { Product } from 'src/app/products';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    items: Product[];

    checkoutForm = new FormGroup({
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
    });    

    constructor(
        private cartService: CartService,
    ) {
        this.items = this.cartService.getItems();      
        
    }

    getFnameError() {
        return this.checkoutForm.get('fname').hasError('required') ? 'Please enter a value':
                '';
    }
    
    getLnameError() {
        return this.checkoutForm.get('lname').hasError('required') ? 'Please enter a value':
                '';
    }

    getEmailError() {
        return this.checkoutForm.get('email').hasError('required') ? 'Please enter a value':
            this.checkoutForm.get('email').hasError('email') ? 'Invalid email' :
                '';
    }

    ngOnInit() {
        // this.checkoutForm.valueChanges.subscribe(
        //     (value) => {
        //         console.log(value)
        //     }
        // )
    }

    submitForm() {
        console.warn('Order has been submitted', this.checkoutForm.value);
        console.warn('Items in order', this.items);

        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }
}

