import { HttpSerivce } from './http.service';

class TodoService extends HttpSerivce {
  constructor(public setUser) {
    super();
    this.setUser = setUser; 
  }

  async getAllTodos(fields, query = '') {
    this.interceptors(this.setUser);

    const response = await this.post({
      url: query ? `api/todos/filter?${query}` : 'api/todos/all',
      data: {...fields},
    });

    return response.data;
  }

  async getTodoById(fields) {
    this.interceptors(this.setUser);

    const response = await this.post({
      url: 'api/todos/find',
      data: {...fields},
    });

    return response.data;
  }

  async createTodo(fields) {
    this.interceptors(this.setUser);

    const response = await this.put({
      url: 'api/todos/create',
      data: {...fields},
    });

    return response.data;
  }

  async updateTodo(fields) {
    this.interceptors(this.setUser);

    const response = await this.patch({
      url: 'api/todos/update',
      data: {...fields},
    });

    return response.data;
  }

  async deleteTodo(fields) {
    this.interceptors(this.setUser);
    
    const response = await this.delete({
      url: 'api/todos/delete',
      data: {...fields},
    });

    return response.data;
  }
}

export default TodoService;
