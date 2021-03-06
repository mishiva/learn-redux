import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_TODOS_REQUEST,
  ADD_TODO_REQUEST,
  REMOVE_TODO_REQUEST
} from '../constants/Todo'
import * as todoActions from '../actions/TodoActions'
import API from '../api';

// GET TODOS
function* fetchTodos() {
  try {
    yield put(todoActions.requestPending(true));
    const result = yield call(API.fetchTodos);
    yield put(todoActions.getTodosSuccess(result.data));
  } catch (e) {
    console.log(e);
    yield put(todoActions.requestFail(e.message));
  }
}

export function* watchGetTodosRequest() {
  yield* takeEvery(GET_TODOS_REQUEST, fetchTodos)
}


// CREATE TODO
function* addTodo(action) {
  try {
    yield put(todoActions.requestPending(true));
    const result = yield call(API.addTodo, action.payload);
    yield put(todoActions.addTodoSuccess(result.data));
  } catch (e) {
    yield put(todoActions.requestFail(e.message));
  }
}

export function* watchAddTodoRequest() {
  yield* takeEvery(ADD_TODO_REQUEST, addTodo)
}


// REMOVE TODO
function* removeTodo(action) {
  try {
    yield put(todoActions.requestPending(true));
    const result = yield call(API.removeTodo, action.payload);
    yield put(todoActions.removeTodoSuccess(result.data));
  } catch (e) {
    yield put(todoActions.requestFail(e.message));
  }
}

export function* watchRemoveTodoRequest() {
  yield* takeEvery(REMOVE_TODO_REQUEST, removeTodo)
}