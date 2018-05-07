import { Component, Input, Output, OnInit, OnChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { log } from '../../shared/log.decorator';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingComponent implements OnInit, OnChanges {
  private outerContainerWidth: number;
  @Input() rating: number;
  @Output() starClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  // @log({
  //   name: 'star-rating.component.ts',
  //   method: 'ngOnInit'
  // })
  ngOnInit() {
    this.outerContainerWidth = ( 86 / 5 ) * this.rating;
  }

  // @log({
  //   name: 'star-rating.component.ts',
  //   method: 'ngOnChanges',
  //   enableArgsLogging: true
  // })
  ngOnChanges() { /* this lifecycle method gets called everytime there is a change in any input (in this case there is one input - rating) */
    this.outerContainerWidth = ( 86 / 5 ) * this.rating;
  }

  // @log({
  //   name: 'star-rating.component.ts',
  //   method: 'ngOnDestroy'
  // })
  ngOnDestroy() { }

  onStarClicked( starNumber ) {
    this.starClicked.emit( starNumber );
  }
}
