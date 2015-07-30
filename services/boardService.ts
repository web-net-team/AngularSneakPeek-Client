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
		            { 'id': 3, 'title': 'run 10 miles'}, 
		            { 'id': 4, 'title': 'find meaning of life' },
		            { 'id': 5, 'title': 'sleep a lot' },
		            { 'id': 6, 'title': 'start dishwasher' },
		            { 'id': 7, 'title': 'plan vacation' },
		            { 'id': 8, 'title': 'go fishing' },
		            { 'id': 9, 'title': 'read a book' },
		            { 'id': 10, 'title': 'watch a movie'}
				]
			}
		]
	}
];

interface IBoard {
	id: number,
	title: string,
	lists?: Array<IList>
}

interface IList {
	id: number,
	title: string,
	tasks?: Array<ITask>
}

interface ITask {
	id: number,
	title: string,
	description?: string
}

class BoardService {
	getBoards() {
		return dummyData;
	}
	
	getBoard(id:number): IBoard {
		let result:Array<IBoard> = dummyData
			.filter(board => board.id === id);
		
    	return result.length > 0 ? result[0] : undefined;
	}
	
	getList(listId: number):IList {
		let list:Array<IList> = dummyData
			.map(board => board.lists)
      		.filter(list => !!list)
      		.reduce((p, n) => p.concat(n),[])
      		.filter(list => list.id === listId);
      
      return list.length > 0 ? list[0] : undefined;
	}
	
	addTask(listId: number, task: ITask): void {
		task.id = this.getNewTaskId();	
	 		
		for(let board in dummyData) {
			for(let list in board.lists) {
				if (list.id === listId) {
					list.tasks.push();
				}
			}
		}
	}
	
	getNewTaskId(): number {
		let existingIds:Array<number> = dummyData
			.map(board => board.lists)
      		.filter(list => !!list)
      		.reduce((p, n) => p.concat(n),[])
			.map(list => list.id);
			
		return Math.max.apply(null, existingIds);
	}
};

export { BoardService, IBoard, IList, ITask };