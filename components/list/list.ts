///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {BoardService, IList} from '../../services/boardService';

@Component({
  selector: 'list',
  viewInjector: [BoardService],
  properties: ['id:list-id']
})
@View({
  templateUrl: 'components/list/list.html',
  directives: [NgFor]
})
class List {
  boardservice:BoardService;
  list:IList;
  
  constructor(boardService:BoardService) {
    this.boardservice = boardService;
  }
  
  set id(value: Number) {
    this.list = this.boardservice.getListFromBoard(2, value);
  }
}

export { List };