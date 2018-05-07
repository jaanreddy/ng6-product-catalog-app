import { Component, OnInit } from '@angular/core';

import { log } from '../shared/log.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  // @log({
  //   name: 'root.component.ts',
  //   method: 'ngOnChanges'
  // })
  ngOnChanges() { }

  // @log({
  //   name: 'root.component.ts',
  //   method: 'ngOnInit'
  // })
  ngOnInit() {
  }

  // @log({
  //   name: 'root.component.ts',
  //   method: 'ngOnDestroy'
  // })
  ngOnDestroy() { }
}