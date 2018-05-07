import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  private productId: number;
  private reviews: any;

  constructor( private _productService: ProductService, private _activatedRoute: ActivatedRoute ) {
    this._activatedRoute.parent.paramMap.subscribe(
      params => {
        this.productId = +params.get('id');
        console.log( this.productId );
      }
    );
  }

  ngOnInit() {
    this._productService.getReviews( this.productId ).subscribe(
      response => this.reviews = response,
      err => console.log( err )
    );
  }
}