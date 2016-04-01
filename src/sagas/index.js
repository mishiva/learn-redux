import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  GET_FRIENDS_REQUEST
  // FRIENDS_FETCH_SUCCEEDED,
  // FRIENDS_FETCH_FAILED
} from '../constants/User'
import fetch from 'isomorphic-fetch'
import * as userActions from '../actions/UserActions'


function getFriendsRequestUrl(rows) {
  return `http://www.filltext.com/?rows=${rows}&fname={firstName}&lname={lastName}&pretty=true`
}

function fetchFriendsApi(rows) {
  return fetch(getFriendsRequestUrl(rows))
    .then(response => response.json() )
    .then(json => {
      debugger
      return json.data.children.map(child => child.data) 
    })
}

function* fetchFriends(action) {
  try {
    const friends = yield call(fetchFriendsApi, action.payload.rows);
    yield put(userActions.fetchFriendsFail(friends));
  } catch (e) {
    yield put(userActions.fetchFriendsFail(e.message));
  }
}

export function* watchFriendsRequest() {
  yield* takeEvery(GET_FRIENDS_REQUEST, fetchFriends)
}
