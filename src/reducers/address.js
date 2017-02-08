import {
  UPDATE_USER_ADDRESS_SUCCEEDED,
  GET_USER_ADDRESS_SUCCEEDED,
  RESET_USER_ADDRESS
} from '../constants/User'

const initialState = {
  address: {
    city: null,
    house: null,
    street: null
  }
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case UPDATE_USER_ADDRESS_SUCCEEDED:
    case GET_USER_ADDRESS_SUCCEEDED:
      return Object.assign({}, state, {
        address: action.payload
      })

    case RESET_USER_ADDRESS:
      return Object.assign({}, state, initialState)

    default:
      return state

  }

}
