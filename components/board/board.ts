///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from 'angular2/angular2';

@Component({
  selector: 'board',
  viewBindings: []
})
@View({
  templateUrl: 'components/board/board.html',
  styleUrls: ['components/board/board.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Board {
  name: string;
  
  constructor() {
    this.name = "MyBoard";
  }
}