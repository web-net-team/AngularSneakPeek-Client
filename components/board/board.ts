///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from 'angular2/angular2';
import {BoardService, IBoard} from '../../services/boardService';
import {List} from '../list/list';

@Component({
  selector: 'board',
  bindings: [BoardService]
})
@View({
  templateUrl: 'components/board/board.html',
  styleUrls: ['components/board/board.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, List]
})
export class Board {
  name: string;
  board: IBoard
  
  constructor(boardService: BoardService) {
    
    this.board = boardService.getBoard(2);
    this.name = this.board.title;
  }
}