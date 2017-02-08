import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_USERS_LIST_REQUEST,
  GET_USER_ADDRESS_REQUEST,
  UPDATE_USER_ADDRESS_REQUEST
} from '../constants/User'
import * as userActions from '../actions/UserActions'
import API from '../api';


function* getUsers(action) {
  try {
    yield put(userActions.getUsersProceeding(true));
    const result = yield call(API.fetchUsers, action.payload);
    if (result.success) {
      yield put(userActions.getUsersSuccess(result.data));
    } else {
      yield put(userActions.getUsersFail(result.error));
    }
  } catch (e) {
    yield put(userActions.getUsersFail(e.message));
  }
}

export function* watchUsersRequest() {
  yield* takeEvery(GET_USERS_LIST_REQUEST, getUsers)
}

// GET ADDRESS
function* getUserAddress(action) {
  try {
    const result = yield call(API.getUserAddress, action.payload);
    if (result.success) {
      yield put(userActions.getAddressSuccess(result.data));
    }
  } catch (e) {
    yield put(userActions.getUsersFail(e.message));
  }
}

export function* watchGetUserAddressRequest() {
  yield* takeEvery(GET_USER_ADDRESS_REQUEST, getUserAddress)
}

// PUT ADDRESS
function* updateUserAddress(action) {
  try {
    const result = yield call(API.updateUserAddress, action.payload.userId, action.payload.data);
    if (result.success) {
      yield put(userActions.updateAddressSuccess(result.data[1][0]));
    }
  } catch (e) {
    yield put(userActions.getUsersFail(e.message));
  }
}

export function* watchUpdateUserAddressRequest() {
  yield* takeEvery(UPDATE_USER_ADDRESS_REQUEST, updateUserAddress)
}

