import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';

import { log } from '../../shared/log.decorator';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: any;
  reviews: any = [];
  
  constructor( private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router ) {
    this.productId = +this._activatedRoute.snapshot.params['id'];
  }

  // @log({
  //   name: 'product-detail.component.ts',
  //   method: 'ngOnChanges'
  // })
  ngOnChanges() { }

  // @log({
  //   name: 'product-detail.component.ts',
  //   method: 'ngOnInit'
  // })
  ngOnInit() {
    this._productService.getProduct( this.productId ).subscribe(
      response => this.product = response,
      err => console.log( err )
    );
  }

  // @log({
  //   name: 'product-detail.component.ts',
  //   method: 'ngOnDestroy'
  // })
  ngOnDestroy() { }

  navigateToProductCatalogView() {
    this._router.navigate( [ '/products' ] );
  }

  onReviewPosted($event) {
    this.reviews.push( $event );
  }
}