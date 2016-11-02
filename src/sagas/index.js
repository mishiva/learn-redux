import { fork } from 'redux-saga/effects'

import { watchFriendsRequest } from './friends'
import { watchAuthRequest } from './auth'


export default function* root() {
  yield [
    fork(watchFriendsRequest),
    fork(watchAuthRequest)
  ]
}