import {
  GET_FRIENDS_REQUEST,
  FRIENDS_FETCH_SUCCEEDED,
  FRIENDS_FETCH_FAILED,
  FETCHING_FRIENDS
} from '../constants/User'

export const getFriends = (rows) => {
  return {
    type: GET_FRIENDS_REQUEST,
    payload: rows
  }
}

export const fetchFriendsSuccess = (friends) => {
  return {
    type: FRIENDS_FETCH_SUCCEEDED,
    payload: friends
  }
}

export const fetchFriendsFail = (message) => {
  return {
    type: FRIENDS_FETCH_FAILED,
    payload: message
  }
}

export const fetchingFriends = (fetching) => {
  return {
    type: FETCHING_FRIENDS,
    payload: fetching
  }
}
