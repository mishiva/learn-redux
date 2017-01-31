import {
  REGISTRATION_RESPONSE,
  REGISTRATION_PROCEEDING
} from '../constants/Registration'

const initialState = {
  regProceeding: false,
  serverMessage: '',
  success: false,
  errors: null
}

export default function auth(state = initialState, action) {
  switch(action.type) {

    case REGISTRATION_RESPONSE:
      return Object.assign({}, state, {
        serverMessage: action.payload.serverMessage || '',
        success: action.payload.success || false,
        regProceeding: false,
        errors: action.payload.errors || null
      })

    case REGISTRATION_PROCEEDING:
      return Object.assign({}, state, {
        regProceeding: true
      })

    default:
      return state

  }

}
