import {
  SET_YEAR,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/Page'

const initialState = {
  year: 2012,
  photos: [],
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload }

    case GET_PHOTOS_REQUEST:
      return { ...state, fetching: true }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, fetching: false }

    default:
      return state;
  }
}
