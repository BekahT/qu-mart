import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { products } from "../products";
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  
  addToCart(product) {
    this.cartService.addToCart(product);
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open('The ' + product.name + ' has been added to the cart', 'Dismiss', config); 
  }

  constructor(
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private cartService: CartService
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }
}
