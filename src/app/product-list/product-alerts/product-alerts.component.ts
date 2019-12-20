import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
import { Product } from 'src/app/products';

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onClick() {
    this.notify.emit(this.product.name);
  }
}
