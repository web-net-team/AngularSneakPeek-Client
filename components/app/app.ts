///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';
import {Navbar} from '../navbar/navbar';
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
  directives: [Navbar, Board]
})
export class KanbanApp {
}