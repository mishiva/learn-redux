import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAIL,
  AUTH_USER_PROCEEDING
} from '../constants/Auth'


export const authSuccess = (user) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: user
  }
}

export const authFail = (message) => {
  return {
    type: AUTH_USER_FAIL,
    payload: message
  }
}

export const authProceeding = (authProceeding) => {
  return {
    type: AUTH_USER_PROCEEDING,
    payload: authProceeding
  }
}

export const authRequest = (authData) => {
  return {
    type: AUTH_USER_REQUEST,
    payload: authData
  }
}
