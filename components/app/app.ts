///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';
import {Navbar} from '../navbar/navbar';
import {Board} from '../board/board';

@Component({
  selector: 'kanban-app'
})
@View({
  template: '<div><navbar></navbar><board></board></div>',
  directives: [Navbar, Board]
})
export class KanbanApp {
}