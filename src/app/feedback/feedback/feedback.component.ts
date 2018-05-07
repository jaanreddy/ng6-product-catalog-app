import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [ FeedbackService ]
})
export class FeedbackComponent {
  constructor( private _feedbackService : FeedbackService ) { }

  sendFeedback( feedbackForm ) {
    var feedback = feedbackForm.value;
    
    // any extra validation can be done now
    if( feedbackForm.invalid ) {
      console.log( 'feedback form values - invalid' );
      return;
    } else {
      console.log( 'feedback form values - valid' );
    }

    // add createdDate property to review
    // var today = new Date();
    // feedback.createdDate = today.toString().substr(4, 6) + ',' + today.toString().substr(10, 5);

    // send feedback
    console.log( this._feedbackService );
    this._feedbackService.sendFeedback( feedback ).subscribe(
      response => {
        alert( 'Thanks for your feedback.' )
      },
      err => console.log( err )
    )
  }
}