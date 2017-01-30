import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCEEDED,
  TODO_REQUEST_FAILED,
  TODO_REQUEST_PENDING
} from '../constants/Todo'

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



export const getTodos = () => {
  return {
    type: GET_TODOS_REQUEST
  }
}

export const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCEEDED,
    payload: todos
  }
}

export const resetTodos = () => {
  return {
    type: GET_TODOS_SUCCEEDED,
    payload: []
  }
}

export const requestFail = (message) => {
  return {
    type: TODO_REQUEST_FAILED,
    payload: message
  }
}

export const requestPending = (pending) => {
  return {
    type: TODO_REQUEST_PENDING,
    payload: pending
  }
}