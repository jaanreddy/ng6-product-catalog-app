import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertService } from './alert.service';
import { AuthenticationService } from './auth/auth.service';
import { EllipsizePipe } from './ellipsize.pipe';

import { AuthGuard } from './auth/auth.guard';
import { JwtInterceptor } from './auth/jwt.interceptor';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { PanelComponent } from './panel/panel.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    EllipsizePipe,
    StarRatingComponent,
    PanelComponent,
    TwoColumnsComponent,
    AlertComponent
  ],
  providers: [
    EllipsizePipe,
    AuthGuard,
    AlertService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  exports: [
    EllipsizePipe,
    StarRatingComponent,
    PanelComponent,
    TwoColumnsComponent
  ]
})
export class SharedModule { }