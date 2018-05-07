import { Component, OnInit, Input } from '@angular/core';

import { log } from '../../shared/log.decorator';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() heading: string;

  constructor() { }

  // @log({
  //   name: 'panel.component.ts',
  //   method: 'ngOnChanges'
  // })
  ngOnChanges() { }

  // @log({
  //   name: 'panel.component.ts',
  //   method: 'ngOnInit'
  // })
  ngOnInit() {
  }

  // @log({
  //   name: 'panel.component.ts',
  //   method: 'ngOnDestroy'
  // })
  ngOnDestroy() { }
}
