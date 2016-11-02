import {
  AUTH_USER_PROCEEDING,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAIL
} from '../constants/Auth'

const initialState = {
  user: {},
  authProceeding: false,
  isAuth: false,
  message: ''
}

export default function auth(state = initialState, action) {
  switch(action.type) {

    case AUTH_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload,
        message: '',
        isAuth: true,
        authProceeding: false
      })

    case AUTH_USER_FAIL:
      return Object.assign({}, state, {
        message: action.payload,
        authProceeding: false,
        isAuth: false
      })

    case AUTH_USER_PROCEEDING:
      return Object.assign({}, state, {
        authProceeding: true,
        isAuth: false
      })

    default:
      return state

  }

}
