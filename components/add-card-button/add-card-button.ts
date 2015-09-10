///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, NgClass, Control, FORM_DIRECTIVES, ViewEncapsulation, NgRequiredValidator, EventEmitter} from 'angular2/angular2';
import {List} from '../list/list';

@Component({
  selector: 'add-card-button',
  events: ['itemCreated:itemcreated']
})
@View({
  templateUrl: 'components/add-card-button/add-card-button.html',
  styleUrls: ['components/add-card-button/add-card-button.css'],
  directives: [NgClass, FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.NATIVE
})
class AddCardButton {
  flipped: Boolean;
  taskTitle: Control;
  itemCreated: EventEmitter;
  
  constructor() {
    this.taskTitle = new Control();
    //this.taskTitle.validator = NgRequiredValidator;
    
    this.itemCreated = new EventEmitter();
    
    this.reset();
  }
  
  addItem(): void {
    this.itemCreated.next(this.taskTitle.value)   
    
    this.reset();
  }
  
  flip(): void {
    this.flipped = true;
  }
  
  reset() {
    this.taskTitle.updateValue('');
    this.flipped = false;
  }
}

export { AddCardButton };