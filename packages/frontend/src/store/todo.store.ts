import { create } from 'zustand';
import { TodoType } from '~shared/services/types';

interface ITodoStore {
	todos: TodoType[];
  isTodoLoading: boolean;
  page: number;
  setPage: (offset: number) => void;
  setTodos: (offset: TodoType[]) => void;
	addTodo: (offset: TodoType) => void;
  updateTodo: (offset: TodoType) => void;
  deleteTodo: (offset: string) => void;
  setIsTodoLoading: (offset: boolean) => void
}

export const useTodosStore = create<ITodoStore>((set) => {
  return {
    todos: [],
    page: 0,
    isTodoLoading: false,
    setTodos: (todos: TodoType[]) => {
      set((state) => {
        return {
          todos,
        };
      });
    },
    setPage: (page: number) => {
      set((state) => {
        return {
          page,
        };
      });
    },
    addTodo: (todo: TodoType) => {
      set((state) => {
        return {
          todos: [
            todo,
            ...state.todos,
          ]
        };
      });
    },
    updateTodo: (currentTodo: TodoType) => {
      set((state) => {
        const newTodos = state.todos.map(todo => (
          todo.id === currentTodo.id
            ? {
              ...todo,
              title: currentTodo.title,
              isCompleted: currentTodo.isCompleted,
            }
            : todo));

        return { todos: newTodos };
      });
    },
    deleteTodo: (id: string) => {
      set((state) => {
        const newTodos = state.todos.filter(todo => todo.id !== id);

        return { todos: newTodos };
      });
    },
    setIsTodoLoading: (isTodoLoading: boolean) => {
      set((state) => {
        return { isTodoLoading };
      });
    },
  };
});
