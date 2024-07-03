import { create } from 'zustand';
import { TodoType } from '~shared/services/types';

interface ITodoStore {
	todos: TodoType[];
  isLoading: boolean;
  setTodos: (offset: TodoType[]) => void;
	addTodo: (offset: TodoType) => void;
  updateTodo: (offset: TodoType) => void;
  deleteTodo: (offset: string) => void;
  setIsLoading: (offset: boolean) => void
}

export const useTodosStore = create<ITodoStore>((set) => {
  return {
    todos: [],
    isLoading: false,
    setTodos: (todos: TodoType[]) => {
      set((state) => {
        return {
          todos,
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
    setIsLoading: (isLoading: boolean) => {
      set((state) => {
        return { isLoading };
      });
    },
  };
});
