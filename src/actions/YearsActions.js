import {
  SET_YEAR,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/Years'

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  }
}

var photos = [];
export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });

    setTimeout(() => {
      photos.push(photos.length);
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos
      });

    }, 1000)
  }
}
