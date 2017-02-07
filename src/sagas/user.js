import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_USERS_LIST_REQUEST
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