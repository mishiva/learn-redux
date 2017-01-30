import { fork } from 'redux-saga/effects'

import { watchFriendsRequest } from './friends'
import { watchAuthRequest, watchLogoutRequest, watchGetUserRequest } from './auth'
import {
  watchGetTodosRequest,
  watchAddTodoRequest,
  watchRemoveTodoRequest
} from './todo'


export default function* root() {
  yield [
    fork(watchFriendsRequest),
    fork(watchAuthRequest),
    fork(watchLogoutRequest),
    fork(watchGetUserRequest),
    fork(watchGetTodosRequest),
    fork(watchAddTodoRequest),
    fork(watchRemoveTodoRequest)
  ]
}