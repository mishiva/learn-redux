import {
  // GET_FRIENDS_REQUEST,
  GET_USERS_LIST_PROCEEDING,
  GET_USERS_LIST_SUCCEEDED,
  GET_USERS_LIST_FAILED
} from '../constants/User'

const initialState = {
  data: {
    rows: [],
    count: 0,
    offset: 0
  },
  message: '',
  proceeding: false
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case GET_USERS_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        data: action.payload,
        message: '',
        proceeding: false
      })

    case GET_USERS_LIST_FAILED:
      return Object.assign({}, state, {
        message: action.payload,
        proceeding: false
      })

    case GET_USERS_LIST_PROCEEDING:
      return Object.assign({}, state, {
        proceeding: action.payload.proceeding
      })

    default:
      return state

  }

}
