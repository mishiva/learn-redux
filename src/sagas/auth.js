import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  AUTH_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  GET_USER_REQUEST
} from '../constants/Auth'
import { Promise } from 'es6-promise';
import * as authActions from '../actions/AuthActions'

const userData = (email) => {
  return {
    first_name: 'First Name',
    last_name: 'Last Name',
    email: email,
    token: '1klfoEiwfCsdflXld23lsd'
  }
}

// AUTH
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
    window.localStorage.setItem('token', user.email)
    yield put(authActions.authSuccess(user));
  } catch (e) {
    yield put(authActions.authFail(e.message));
  }
}

export function* watchAuthRequest() {
  yield* takeEvery(AUTH_USER_REQUEST, authUser)
}


// LOGOUT
function logoutUserApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function* logoutUser() {
  try {
    yield call(logoutUserApi);
    window.localStorage.removeItem('token')
    yield put(authActions.logoutSuccess());
  } catch (e) {
    yield put(authActions.logoutFail(e.message));
  }
}

export function* watchLogoutRequest() {
  yield* takeEvery(LOGOUT_USER_REQUEST, logoutUser)
}

// GET USER
function geyUserApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = window.localStorage.getItem('token')
      resolve(userData(email));
    }, 1000);
  });
}

function* getUser() {
  try {
    const user = yield call(geyUserApi);
    window.localStorage.setItem('token', user.email)
    yield put(authActions.authSuccess(user));
  } catch (e) {
    alert(e.message);
  }
}

export function* watchGetUserRequest() {
  yield* takeEvery(GET_USER_REQUEST, getUser)
}
