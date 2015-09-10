///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, Control, EventEmitter, ViewEncapsulation} from 'angular2/angular2';

@Component({
  selector: 'add-card-button',
  events: ['itemCreated:itemcreated']
})
@View({
  templateUrl: 'components/add-card-button/add-card-button.html',
  styleUrls: ['components/add-card-button/add-card-button.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.NATIVE
})
export class AddCardButton {
  flipped: Boolean;
  taskTitle: Control;
  itemCreated: EventEmitter;
  
  constructor() {
    this.taskTitle = new Control();
    this.itemCreated = new EventEmitter();
    
    this.reset();
  }
  
  addItem(): void {  
    this.itemCreated.next(this.taskTitle.value); 
    this.reset();
  }
  
  flip(): void {
    this.flipped = true;
  }
  
  reset(): void {
    this.taskTitle.updateValue('');
    this.flipped = false;
  }
}