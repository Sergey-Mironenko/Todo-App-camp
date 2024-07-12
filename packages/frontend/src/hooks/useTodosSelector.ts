import { useTodosStore } from "~store/todo.store";

export const useTodosSelector = () => {
  const [todos, page, setPage, isTodoLoading, setTodos, addTodo, updateTodo, deleteTodo, setIsTodoLoading] = useTodosStore((state => [
    state.todos, state.page, state.setPage, state.isTodoLoading, state.setTodos, state.addTodo, state.updateTodo, state.deleteTodo, state.setIsTodoLoading
  ]));

  return {
    todos,
    page,
    setPage,
    isTodoLoading,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    setIsTodoLoading,
  }
}