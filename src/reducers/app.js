import {
  TOGGLE_DRAWER
} from '../constants/App'

const initialState = {
  isDrawerOpened: true
}

export default function user(state = initialState, action) {

  switch(action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        isDrawerOpened: !state.isDrawerOpened
      })

    default:
      return state
  }

}
