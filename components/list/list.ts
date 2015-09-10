///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from 'angular2/angular2';
import {BoardService, IList, ITask} from '../../services/boardService';

@Component({
  selector: 'list',
  bindings: [BoardService],
  properties:['id:list-id']
})
@View({
  templateUrl: 'components/list/list.html',
  styleUrls: ['components/list/list.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
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
  
  loadList(id: number) {
    this.list = this.boardservice.getList(id);
  }
}

export { List };