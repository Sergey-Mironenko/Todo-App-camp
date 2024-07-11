import prisma from '../utils/db';
import { TodoType } from '../types/todos.type';
  
export default class TodoService {
  async findAll(userId: string): Promise<TodoType[] | null> {
	const todos = prisma.todo.findMany({
	  where: {
		OR: [
		  {
			isPprivate: {
			  equals: false,
			},
		  },
		  {
			userId: {
			  equals: userId,
			},
		  },
		]
	  }
	});

	if (todos) {
		return todos;
	  }
	  
	  return null;
  }

  async findFiltered(id: string, query: string, status?: boolean | null, privacy?: boolean | null): Promise<TodoType[] | null> {
	let todos = await this.findAll(id);

	if (todos) {
	  if (status !== null) {
		todos = todos.filter(todo => todo.isCompleted === status);
	  }

	  if (privacy) {
		todos = todos.filter(todo => todo.isPprivate === privacy)
	  }

	  return todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));
	}
	  
	return null;
  }

  async getById(id: string): Promise<TodoType | null> {
	const todo = await prisma.todo.findUnique({
	  where: {
		id
	  }
    });
	
	if (todo) {
	  return todo;
	}
	
	return null;
  }

  async addTodo(title: string, text: string, userId: string, userName: string, isCompleted: boolean, isPprivate: boolean): Promise<TodoType | null> {
	const newTodo = await prisma.todo.create({
	  data: {
		title,
		text,
	    userId,
		userName,
	    isCompleted,
	    isPprivate,
	  },
	});

	return newTodo;
  };

  async updateTodo(id: string, title: string, text: string, isCompleted: boolean, isPprivate: boolean): Promise<TodoType | null> {
	const newTodo = await prisma.todo.update({
	  where: {
		id
	  },
	  data: {
        title,
		text,
		isCompleted,
		isPprivate,
	  }
	});

	if (newTodo) {
	  return newTodo;
	}

	return null;
  };

  async deleteTodo(id: string): Promise<TodoType | null> {
	const newTodo = await prisma.todo.delete({
	  where: {
		id
	  },
	});

	if (newTodo) {
	  return newTodo;
	}

	return null;
  };
}
