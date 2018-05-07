import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';

import { log } from '../../shared/log.decorator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  //template: '<input type="button" class="btn btn-primary" value="Test button" />',
  styleUrls: ['./product-list.component.css']
  /*
  styles: [
    `
      input[type="button"] {
        color: crimson;
      }
    `
  ]
  */
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _productService: ProductService;
  products : any;
  
  imageWidth: number = 25;
  imageWidthLarge: number = 50;
  
  // to hide and show images
  imageSeen: boolean = true;

  // for filtering
  filteredProducts: object[];
  _filterKey : string;

  // product description state (whether to show short version or long version)
  descriptionState: boolean[];
  
  get filterKey(): string {
    return this._filterKey;
  }

  set filterKey( strFilterKey ) {
    var that = this;
    this._filterKey = strFilterKey;

    this.filteredProducts = this.products.filter(function( product: any ) {
      return product.name.toLocaleUpperCase().indexOf( that.filterKey.trim().toLocaleUpperCase() ) !== -1
    });
  }

  constructor( productService: ProductService ) {
    this._productService = productService;
  }

  // @log({
  //   name: 'product-list.component.ts',
  //   method: 'ngOnChanges'
  // })
  ngOnChanges() { }

  // @log({
  //   name: 'product-list.component.ts',
  //   method: 'ngOnInit'
  // })
  ngOnInit() {
    // console.log( 'ngOnInit() got called' );
    this._productService.getProducts().subscribe(
      // success method - gets the event payload when the event occurs and is successful
      response => {
        this.products = response;

        this.products.forEach( function( product ) {
          product['isShortDescription'] = true;
        });
    
        this.filterKey = '';
      }
      // error method - gets the error details when an event results in error
    );
  }

  // @log({
  //   name: 'product-list.component.ts',
  //   method: 'ngOnDestroy'
  // })
  ngOnDestroy() { }

  toggleImage() {
    this.imageSeen = !this.imageSeen;
  }

  mouseOverHandler( product: any ) {
    // console.log( 'product.name = ', product.name );
  }

  updateFilterKey($event) {
    // console.log( '$event = ', $event );
    // console.log( $event.target.value );
    // console.log( 'filterKey = ', this.filterKey );
  }

  toggleDescription(product) {
    product['isShortDescription'] = !product['isShortDescription'];
  }

  decreaseRating( product ) {
    product.starRating = product.starRating - 0.5;
  }

  onStarClicked( starNumber ) {
    console.log( 'star which was clicked : ', starNumber );
  }
}
