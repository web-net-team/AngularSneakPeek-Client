///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, Parent, Ancestor, CSSClass, Control, formDirectives} from 'angular2/angular2';
//import {Control, FormDirectives} from 'angular2/forms';
import {List} from '../list/list';
import {ITask} from '../../services/boardService';

@Component({
  selector: 'add-card-button'
})
@View({
  templateUrl: 'components/add-card-button/add-card-button.html',
  styleUrls: ['components/add-card-button/add-card-button.css'],
  directives: [CSSClass, formDirectives]
})
class AddCardButton {
  //list: List;
  flipped: Boolean;
  taskTitle: Control;
  
  constructor() {
    //this.list = list;
    
    this.taskTitle = new Control();
    this.reset();
  }
  
  addTask(): void {
    let task = {
      id: 0
      //title: this.taskTitle.value  
    };
    
    //this.list.addTask(task);    
    this.reset();
  }
  
  flip(): void {
    this.flipped = true;
  }
  
  reset() {
    this.taskTitle.value = '';
    this.flipped = false;
  }
}

export { AddCardButton };