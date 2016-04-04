import {
  // GET_FRIENDS_REQUEST,
  FETCHING_FRIENDS,
  FRIENDS_FETCH_SUCCEEDED,
  FRIENDS_FETCH_FAILED
} from '../constants/User'

const initialState = {
  name: 'name',
  surname: 'someSurname',
  age: 42,
  friends: [],
  message: '',
  fetching: false
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case FRIENDS_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        friends: action.payload,
        message: '',
        fetching: false
      })

    case FRIENDS_FETCH_FAILED:
      return Object.assign({}, state, {
        message: action.payload,
        fetching: false
      })

    case FETCHING_FRIENDS:
      return Object.assign({}, state, {
        fetching: true
      })

    default:
      return state

  }

}
