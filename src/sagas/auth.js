import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  AUTH_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  GET_USER_REQUEST
} from '../constants/Auth'
import * as authActions from '../actions/AuthActions'
import API from '../api';
import { browserHistory } from 'react-router'
import { setToken, removeToken } from '../helpers/auth'


function* authUser(action) {
  try {
    yield put(authActions.authProceeding(true));
    const res = yield call(API.authorize, action.payload);
    if(!res.success) {
      yield put(authActions.authFail(res.error));
    } else {
      setToken(res.data.token);
      yield put(authActions.authSuccess(res.data));
      if (window.location.search.search('redirect') == 1) {
        const url = window.location.search.split('=')[1]
        yield put(push(window.decodeURIComponent(url)))
      }
    }
  } catch (e) {
    yield put(authActions.authFail(e.message));
  }
}

export function* watchAuthRequest() {
  yield* takeEvery(AUTH_USER_REQUEST, authUser)
}

// LOGOUT
function* logoutUser() {
  try {
    removeToken()
    yield put(authActions.logoutSuccess());
    browserHistory.push('/')
  } catch (e) {
    yield put(authActions.logoutFail(e.message));
  }
}

export function* watchLogoutRequest() {
  yield* takeEvery(LOGOUT_USER_REQUEST, logoutUser)
}

// GET USER
function* getUser() {
  try {
    const res = yield call(API.getCurrentUserData);
    yield put(authActions.authSuccess(res.data));
  } catch (e) {
    console.log(e.message);
  }
}

export function* watchGetUserRequest() {
  yield* takeEvery(GET_USER_REQUEST, getUser)
}

export function* getUserRequest() {
  yield* getUser();
}

