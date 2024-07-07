import { HttpSerivce } from './http.service';

class TodoService extends HttpSerivce {
  constructor() {
    super();
  }

  async getAllTodos() {
    const response = await this.get({
      url: 'api/todos/all',
    });

    return response.data;
  }

  async getTodoById(fields) {
    const response = await this.post({
      url: 'api/todos/find',
      data: {...fields},
    });

    return response.data;
  }

  async createTodo(fields) {
    const response = await this.put({
      url: 'api/todos/create',
      data: {...fields},
    });

    return response.data;
  }

  async updateTodo(fields) {
    const response = await this.patch({
      url: 'api/todos/update',
      data: {...fields},
    });

    return response.data;
  }

  async deleteTodo(fields) {
    const response = await this.delete({
      url: 'api/todos/delete',
      data: {...fields},
    });

    return response.data;
  }
}

export const todoSerivce = new TodoService();
export default todoSerivce;
