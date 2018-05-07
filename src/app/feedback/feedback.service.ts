import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map , throttle} from 'rxjs/operators';

@Injectable()
export class FeedbackService {
  private _feedbackUrl = 'http://localhost:4201/feedback';
  private _http: Http;

  constructor( http: Http ) {
    this._http = http;
  }

  sendFeedback(feedback ): Observable<Response> {
    return this._http.post( this._feedbackUrl, feedback ).pipe(map( response => response.json() ));
  }
}
