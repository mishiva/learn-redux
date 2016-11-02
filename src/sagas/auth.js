import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  AUTH_USER_REQUEST
} from '../constants/Auth'
import { Promise } from 'es6-promise';
import * as authActions from '../actions/AuthActions'

const userData = (email) => {
  return {
    first_name: 'First Name',
    last_name: 'Last Name',
    email: email
  }
}

function authUserApi(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData(user.email));
    }, 3000);
  });
}

function* authUser(action) {
  try {
    yield put(authActions.authProceeding(true));
    const user = yield call(authUserApi, action.payload);
    yield put(authActions.authSuccess(user));
  } catch (e) {
    yield put(authActions.authFail(e.message));
  }
}

export function* watchAuthRequest() {
  yield* takeEvery(AUTH_USER_REQUEST, authUser)
}