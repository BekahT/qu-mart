import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share(productName) {
    window.alert("The " + productName + " has been shared!");
  }

  onNotify(productName) {
    window.alert(
      "You will be notified when the " + productName + " goes on sale."
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
