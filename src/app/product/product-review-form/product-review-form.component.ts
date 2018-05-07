import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent {
  private productId: number;
  
  isStarRatingValid: boolean = true;

  constructor( private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router ) {
    this._activatedRoute.parent.paramMap.subscribe(
      params => {
        this.productId = +params.get('id');
        console.log( this.productId );
      }
    );
    console.log( '[review-form]',this.productId );
    console.log( this._activatedRoute.snapshot );
  }

  onInputReviewer( reviewer, reviewerModel ) {
    console.log( 'reviewer = ', reviewer ); // DOM node (input element)
    console.log( 'reviewerModel = ', reviewerModel ); // ngModel instance
  }

  checkStarRatingValidity( starRatingInput ) {
    if( starRatingInput.value === '' ) {
      this.isStarRatingValid = false;
    } else {
      this.isStarRatingValid = true;
    }
  }

  postReview( reviewForm ) {
    var review = reviewForm.value;
    console.log( 'reviewForm.value = ', review );
    
    // any extra validation can be done now
    if( reviewForm.invalid ) {
      console.log( 'review form values - invalid' );
      return;
    } else {
      console.log( 'review form values - valid' );
    }

    // add createdDate property to review
    // var today = new Date();
    // review.createdDate = today.toString().substr(4, 6) + ',' + today.toString().substr(10, 5);

    // post the review
    console.log( this._productService );
    this._productService.postReview( this.productId, review ).subscribe(
      response => {
        console.log( 'response = ', response );
        alert( 'Thanks for the review - it has been added successfully' );
        this._router.navigate( [ '/products', this.productId ] );
      },
      err => console.log( err )
    )
  }
}