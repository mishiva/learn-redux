import {
  // GET_FRIENDS_REQUEST,
  FRIENDS_FETCH_SUCCEEDED,
  FRIENDS_FETCH_FAILED
} from '../constants/User'

const initialState = {
  name: 'name',
  surname: 'someSurname',
  age: 42,
  friends: [],
  message: ''
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case FRIENDS_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        friends: action.payload,
        message: ''
      })

    case FRIENDS_FETCH_FAILED:
      return Object.assign({}, state, {
        message: action.payload
      })

    default:
      return state

  }

}
