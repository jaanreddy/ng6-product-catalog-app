import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './product.service';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id',
        component: ProductDetailComponent,
        children: [
          { path: '', component: ProductReviewsComponent },
          { path: 'reviews/add', component: ProductReviewFormComponent },
          { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: '/products', pathMatch: 'full' }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductReviewFormComponent,
    ProductReviewsComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
