import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_TODOS_REQUEST,
  ADD_TODO_REQUEST,
  REMOVE_TODO_REQUEST
} from '../constants/Todo'
import fetch from 'isomorphic-fetch'
import * as todoActions from '../actions/TodoActions'
import CONFIG from '../config';
const rootTodoUrl = 'todo';

// function resToJSON(response) {
//   return response.json()
//     .then(json => json)
// }

// GET TODOS
function fetchTodosApi() {
  return fetch(`${CONFIG.apiUrl}/${rootTodoUrl}`)
    .then(response => {
      return response.json()
    })
    .then(json => json)
}

function* fetchTodos() {
  try {
    yield put(todoActions.requestPending(true));
    const todos = yield call(fetchTodosApi);
    yield put(todoActions.getTodosSuccess(todos));
  } catch (e) {
    yield put(todoActions.requestFail(e.message));
  }
}

export function* watchGetTodosRequest() {
  yield* takeEvery(GET_TODOS_REQUEST, fetchTodos)
}


// CREATE TODO
function addTodoApi(todo) {
  return fetch(
    `${CONFIG.apiUrl}/${rootTodoUrl}`
    ,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: todo.text,
        complete: todo.completed
      })
    })
    .then(response => {
      return response.json()
    })
    .then(json => json)
}

function* addTodo(action) {
  try {
    yield put(todoActions.requestPending(true));
    const todo = yield call(addTodoApi, action.payload);
    yield put(todoActions.addTodoSuccess(todo));
  } catch (e) {
    yield put(todoActions.requestFail(e.message));
  }
}

export function* watchAddTodoRequest() {
  yield* takeEvery(ADD_TODO_REQUEST, addTodo)
}


// REMOVE TODO
function removeTodoApi(id) {
  return fetch(`${CONFIG.apiUrl}/${rootTodoUrl}/${id}`, {method: 'DELETE'})
    .then(response => {
      return response.json()
    })
    .then(json => json)
}

function* removeTodo(action) {
  try {
    yield put(todoActions.requestPending(true));
    const todoId = yield call(removeTodoApi, action.payload);
    yield put(todoActions.removeTodoSuccess(todoId));
  } catch (e) {
    yield put(todoActions.requestFail(e.message));
  }
}

export function* watchRemoveTodoRequest() {
  yield* takeEvery(REMOVE_TODO_REQUEST, removeTodo)
}