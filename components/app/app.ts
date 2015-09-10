///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'kanban-app'
})
@View({
  styles: [],
  template:
  `Hello {{ name }}`,
  directives: []
})
export class KanbanApp {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}