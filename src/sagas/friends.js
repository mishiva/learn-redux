import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_FRIENDS_REQUEST
} from '../constants/User'
import fetch from 'isomorphic-fetch'
import * as userActions from '../actions/UserActions'


function getFriendsRequestUrl(rows) {
  return `http://www.filltext.com/?rows=${rows}&fname={firstName}&lname={lastName}&pretty=true`
}

function fetchFriendsApi(rows) {
  return fetch(getFriendsRequestUrl(rows))
    .then(response => {
      return response.json()
    })
    .then(json => json)
}

function* fetchFriends(action) {
  try {
    yield put(userActions.fetchingFriends(true));
    const friends = yield call(fetchFriendsApi, action.payload);
    yield put(userActions.fetchFriendsSuccess(friends));
  } catch (e) {
    yield put(userActions.fetchFriendsFail(e.message));
  }
}

export function* watchFriendsRequest() {
  yield* takeEvery(GET_FRIENDS_REQUEST, fetchFriends)
}