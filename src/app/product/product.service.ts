import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private _productsUrl = 'http://localhost:4201/products';

  constructor( private _http: HttpClient /* _http: Http */ ) {
    this._http = _http;
  }

  getProducts() {
    return this._http.get( this._productsUrl ); /*.map( response => response.json() ) */
  }

  getProduct( productId: number ) {
    return this._http.get( this._productsUrl + '/' + productId ); /*.map( response => response.json() ); */
  }

  getReviews( productId: number ) {
    return this._http.get( this._productsUrl + '/' + productId + '/reviews' )
      /*.map(response => response.json() ); */
  }

  postReview( productId: number, review: any ) {
    return this._http.post( this._productsUrl + '/' + productId + '/reviews', review );
      /*.map(response => response.json() ) */
  }
}
