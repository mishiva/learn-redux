import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_TODOS_REQUEST
} from '../constants/Todo'
import fetch from 'isomorphic-fetch'
import * as todoActions from '../actions/TodoActions'
import CONFIG from '../config';

console.log('+++++ CONFIG +++++');
console.log(CONFIG);
const rootTodoUrl = 'todo';

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