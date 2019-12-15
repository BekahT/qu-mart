import { Component } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  constructor(private _snackBar: MatSnackBar) {}

  share(productName) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open('The ' + productName + ' has been shared', 'Dismiss', config);    
  }

  onNotify(productName) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open('You will be notified when ' + productName + ' goes on sale', 'Dismiss', config);    
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
