import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  items;
  count = 0;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit() {  
    // Update the items count each time the items in cart changes
    this.cartService.change.subscribe(items => {
      this.count = items.length;
    });  
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/