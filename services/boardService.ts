///<reference path="../typings/rx/rx.d.ts"/>

//import {Rx} from 'Rx';

let dummyData:Array<IBoard> = [
	{
		'id': 1,
		'title': 'Shopping list'
	},
	{
		'id': 2,
		'title': 'Todos',
		'lists':
		[
			{ 
				'id': 1,
				'title': 'new',
				'tasks':
				[
					{ 'id': 1, 'title': 'clean house' },
					{ 'id': 2, 'title': 'buy nutella' }
				]
			},
		    {
				'id': 2,
				'title': 'done',
				'tasks':
				[
		            { 'id': 1, 'title': 'run 10 miles'}, 
		            { 'id': 2, 'title': 'find meaning of life' },
		            { 'id': 3, 'title': 'sleep a lot' },
		            { 'id': 4, 'title': 'start dishwasher' },
		            { 'id': 5, 'title': 'plan vacation' },
		            { 'id': 6, 'title': 'go fishing' },
		            { 'id': 7, 'title': 'read a book' },
		            { 'id': 8, 'title': 'watch a movie'}
				]
			}
		]
	}
];

interface IBoard {
	id: Number,
	title: String,
	lists?: Array<IList>
}

interface IList {
	id: Number,
	title: String,
	tasks?: Array<ITask>
}

interface ITask {
	id: Number,
	title: String,
	description?: String
}

class BoardService {
	getBoards() {
		return dummyData;
	}
	
	getBoard(id:Number): IBoard {
		let result:Array<IBoard> = dummyData
			.filter(board => board.id === id);
		
    	return result.length > 0 ? result[0] : undefined;
	}
	
	getListFromBoard(boardId: Number, listId: number):IList {
		let list:Array<IList> = dummyData
			.filter(board => board.id === boardId)
			.map(board => board.lists)
      		.filter(list => !!list)
      		.reduce((p, n) => p.concat(n),[])
      		.filter(list => list.id === listId);
      
      return list.length > 0 ? list[0] : undefined;
	}
};

export { BoardService, IBoard, IList, ITask };