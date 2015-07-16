///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';
import {Navbar} from '../navbar/navbar';

@Component({
  selector: 'kanban-app'
})
@View({
  template: '<div><navbar></navbar></div>',
  directives: [Navbar]
})
export class KanbanApp {
}