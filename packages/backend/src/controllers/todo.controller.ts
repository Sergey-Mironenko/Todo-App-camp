import { validatePrivacy, validateStatus } from '../utils/validateSearchParams';
import { Response, Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response): Promise<void> {
	const { id, currentPage, amount } = req.body;
	const startIndex = currentPage * amount;
	const endIndex = (currentPage * amount) + amount - 1;

	let todos = await this.todoService.findAll(id);
	let lastPage;

	if (todos) {
	  lastPage = Math.floor(todos.length / amount);

	  todos = todos.slice(startIndex, endIndex);

	  if (lastPage < currentPage) {
		lastPage = currentPage;
	  }
	}

	res.send({
	  message: 'OK',
	  pageFromServer: lastPage,
	  todosFromServer: todos,
	});
  }

  async getFilteredTodo(req: Request, res: Response): Promise<void> {
	const { id, currentPage, amount } = req.body;
	const startIndex = currentPage * amount;
	const endIndex = (currentPage * amount) + amount - 1;
	
	const query = String(req.query.query) || '';
	const status =  validateStatus(String(req.query.status))
	const privacy = validatePrivacy(String(req.query.privacy));

	let todos = await this.todoService.findFiltered(id, query, status, privacy);
	let lastPage;

	if (todos) {
	  lastPage = Math.floor(todos.length / amount);

	  todos = todos.slice(startIndex, endIndex);

	  if (lastPage < currentPage) {
		lastPage = currentPage;
	  }
	}

	res.send({
	  message: 'OK',
	  pageFromServer: lastPage,
	  todosFromServer: todos,
	});
  }

  async getById(req: Request, res: Response): Promise<void> {	
	const { entity } = res.locals;

	res.send({
	  message: 'OK',
	  todo: entity,
	});
  }

  async createTodo(req: Request, res: Response): Promise<void> {
	const { title, text, userId, userName = '-', isCompleted = false, isPrivate = false } = req.body;

	const newTodo = await this.todoService.addTodo(title, text, userId, userName, isCompleted, isPrivate);

	res.send({
	  message: 'Successfully added',
	  newTodo,
	});
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
	const { id, title, text, isCompleted, isPrivate } = req.body;

	const updatedTodo = await this.todoService.updateTodo(id, title, text, isCompleted, isPrivate );

	res.send({
	  message: 'Successfully updated',
	  updatedTodo,
	});
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
	const { id } = req.body;

	const deletedTodo = await this.todoService.deleteTodo(id);

	res.send({
	  message: 'OK',
	  deletedTodo,
	});
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
