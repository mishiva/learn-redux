import { ADD_TODO, REMOVE_TODO } from '../constants/Todo'

let nextTodoId = 0;
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text,
      id: nextTodoId++
    }
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}
