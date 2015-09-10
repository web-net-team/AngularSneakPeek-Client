///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View} from 'angular2/angular2';

import {NavBar} from '../navbar/navbar';
import {Board} from '../board/board';

@Component({
  selector: 'kanban-app'
})
@View({
  styles: [`
    navbar { 
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
    }
    board {
      position: fixed;
      top: 50px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `],
  template:
  `<div>
    <navbar></navbar>
    <board></board>
  </div>`,
  directives: [NavBar, Board]
})
export class KanbanApp {
}