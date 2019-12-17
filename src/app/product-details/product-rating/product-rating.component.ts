import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";


@Component({
    selector: 'app-product-rating',
    templateUrl: './product-rating.component.html',
    styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {
    @Input() product;
    fullStars;
    halfStars;
    emptyStars;
    intRating;

    constructor() { }

    ngOnInit() { 
        // If the rating has half stars
        if(this.product.rating % 1 !== 0 ){
            this.intRating = this.product.rating-0.5;
            this.fullStars = new Array(this.intRating);
            this.halfStars = new Array(1);
            this.emptyStars = new Array(4-this.intRating);
        // If the rating has no half stars
        } else if (this.product.rating % 1 === 0) {
            this.fullStars = new Array(this.product.rating);
            this.emptyStars = new Array(5-this.product.rating);
        }
    }
}
