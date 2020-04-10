import { Component } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Product } from 'src/app/products';
import { products } from "../products";
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products: Product[] = products;
  sortOptions: String[] = ["Price: High to Low", "Price: Low to High", "Rating: High to Low", "Rating: Low to High"];
  selectedSort: String;

  constructor(
    private _snackBar: MatSnackBar,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open('The ' + product.name + ' has been added to the cart', 'Dismiss', config);
  }

  sort(value: String) {
    switch(value) {
      case value = "Price: High to Low": {
        products.sort((a: Product, b: Product) => (a.price > b.price) ? -1 : 1);
        break;
      } 
      case value = "Price: Low to High": {
        products.sort((a: Product, b: Product) => (a.price < b.price) ? -1 : 1);
        break;
      }
      case value = "Rating: High to Low": {
        products.sort((a: Product, b: Product) => (a.rating > b.rating) ? -1 : 1);
        break;
      }
      case value = "Rating: Low to High": {
        products.sort((a: Product, b: Product) => (a.rating < b.rating) ? -1 : 1);
        break;
      }
    }
  }

}