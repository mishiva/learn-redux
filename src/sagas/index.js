import { fork } from 'redux-saga/effects'

import {
  watchUsersRequest,
  watchGetUserAddressRequest,
  watchUpdateUserAddressRequest
} from './user'
import { watchAuthRequest, watchLogoutRequest, watchGetUserRequest } from './auth'
import { watchRegistrationRequest } from './registration'
import {
  watchGetTodosRequest,
  watchAddTodoRequest,
  watchRemoveTodoRequest
} from './todo'


export default function* root() {
  yield [
    fork(watchUsersRequest),
    fork(watchGetUserAddressRequest),
    fork(watchUpdateUserAddressRequest),
    fork(watchAuthRequest),
    fork(watchRegistrationRequest),
    fork(watchLogoutRequest),
    fork(watchGetUserRequest),
    fork(watchGetTodosRequest),
    fork(watchAddTodoRequest),
    fork(watchRemoveTodoRequest)
  ]
}