import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCEEDED,
  TODO_REQUEST_FAILED,
  TODO_REQUEST_PENDING,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCEEDED,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCEEDED
} from '../constants/Todo'

// GET TODOS LIST
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

// CREATE TODO
export function addTodo(text) {
  return {
    type: ADD_TODO_REQUEST,
    payload: {
      text,
      completed: false
    }
  }
}

export const addTodoSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCEEDED,
    payload: todo
  }
}

// REMOVE
export function removeTodo(id) {
  return {
    type: REMOVE_TODO_REQUEST,
    payload: id
  }
}

export const removeTodoSuccess = (id) => {
  return {
    type: REMOVE_TODO_SUCCEEDED,
    payload: id
  }
}

// FAIL & PENDING
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