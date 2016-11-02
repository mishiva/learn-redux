import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAIL,
  AUTH_USER_PROCEEDING,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  GET_USER_REQUEST
} from '../constants/Auth'


// AUTH
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

// LOGOUT
export const logoutRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS
  }
}

export const logoutFail = (message) => {
  return {
    type: LOGOUT_USER_FAIL,
    payload: message
  }
}

// GET USER
export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST
  }
}