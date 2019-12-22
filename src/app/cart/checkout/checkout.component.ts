import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { CartService } from '../../cart.service';
import { Product } from 'src/app/products';
import { States } from 'src/assets/states';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    items: Product[];
    states = States;

    checkoutForm = new FormGroup({
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        addressForm: new FormGroup({
            lineOne: new FormControl('', Validators.required),
            lineTwo: new FormControl(''),
            city: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            zip: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')])
        })
    });

    constructor(
        private cartService: CartService,
        private _snackBar: MatSnackBar
    ) {
        this.items = this.cartService.getItems();

    }

    getError(control: string) {
        return this.checkoutForm.get(control).hasError('required') ? 'Please enter a value' :
            this.checkoutForm.get(control).hasError('email') ? 'Please enter a valid email' :
            this.checkoutForm.get(control).hasError('pattern') ? 'Please enter a 5-digit zip code' :
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
        console.warn('Order details: ', this.checkoutForm.value);
        console.warn('Items in order: ', this.items);

        const config = new MatSnackBarConfig();
        config.panelClass = ['snackbar-notification'];
        config.duration = 3000;
        this._snackBar.open('Your order has been submitted', 'Dismiss', config);

        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }
}

