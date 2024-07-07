import { useTodosStore } from "~store/todo.store";

export const useTodosSelector = () => {
  const [todos, isTodoLoading, setTodos, addTodo, updateTodo, deleteTodo, setIsTodoLoading] = useTodosStore((state => [
    state.todos, state.isTodoLoading, state.setTodos, state.addTodo, state.updateTodo, state.deleteTodo, state.setIsTodoLoading
  ]));

  return {
    todos,
    isTodoLoading,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    setIsTodoLoading,
  }
}