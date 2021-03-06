import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  items: Product[];
  count = 0;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit() {  
    // Update the items count each time the items in cart changes    
    this.cartService.change.subscribe(items => {
      this.count = this.cartService.getQuantity();
    });
  }
}