///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {BoardService, IList, ITask} from '../../services/boardService';
import {AddCardButton} from '../add-card-button/add-card-button';

@Component({
  selector: 'list',
  bindings: [BoardService],
  properties: ['id:list-id']
})
@View({
  templateUrl: 'components/list/list.html',
  styleUrls: ['components/list/list.css'],
  directives: [NgFor, AddCardButton]
})
class List {
  boardservice:BoardService;
  list:IList;
  
  constructor(boardService:BoardService) {
    this.boardservice = boardService;
  }
  
  set id(value: number) {
    this.loadList(value);
  }
  
  addTask($event) {
    let task: ITask = {
      id: 0,
      title: $event
    };
    
    this.boardservice.addTask(this.list.id, task);
    this.list.tasks.push(task);
  }
  
  loadList(id: number) {
    this.list = this.boardservice.getList(id);
  }
}

export { List };