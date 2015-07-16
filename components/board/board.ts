///<reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {BoardService, IBoard} from '../../services/boardService';

@Component({
  selector: 'board',
  viewInjector: [BoardService]
})
@View({
  templateUrl: 'components/board/board.html',
  directives: [NgFor]
})
export class Board {
  
  boardService:BoardService;
  board: IBoard
  
  constructor(boardService:BoardService){
    this.boardService = boardService;
    
    this.board = this.boardService.getBoard(2);
  }
	
}