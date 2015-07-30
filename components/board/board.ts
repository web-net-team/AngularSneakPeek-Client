///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {BoardService, IBoard} from '../../services/boardService';
import {List} from '../list/list';

@Component({
  selector: 'board',
  viewInjector: [BoardService]
})
@View({
  templateUrl: 'components/board/board.html',
  styleUrls: ['components/board/board.css'],
  directives: [NgFor, List]
})
export class Board {
  
  boardService:BoardService;
  board: IBoard
  
  constructor(boardService:BoardService){
    this.boardService = boardService;
    
    this.board = this.boardService.getBoard(2);
  }
	
}