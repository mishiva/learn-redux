import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCEEDED,
  GET_USERS_LIST_FAILED,
  GET_USERS_LIST_PROCEEDING,
  UPDATE_USER_ADDRESS_REQUEST,
  UPDATE_USER_ADDRESS_SUCCEEDED,
  GET_USER_ADDRESS_REQUEST,
  GET_USER_ADDRESS_SUCCEEDED,
  RESET_USER_ADDRESS
} from '../constants/User'

export const getUsers = (limit, offset) => {
  return {
    type: GET_USERS_LIST_REQUEST,
    payload: {limit, offset}
  }
}

export const getUsersSuccess = (result) => {
  return {
    type: GET_USERS_LIST_SUCCEEDED,
    payload: result // rows, count, offset
  }
}

export const getUsersFail = (message) => {
  return {
    type: GET_USERS_LIST_FAILED,
    payload: message
  }
}

export const getUsersProceeding = (proceeding) => {
  return {
    type: GET_USERS_LIST_PROCEEDING,
    payload: proceeding
  }
}

// UPDATE ADDRESS
export function updateAddress(userId, data) {
  return {
    type: UPDATE_USER_ADDRESS_REQUEST,
    payload: {userId, data}
  }
}

export const updateAddressSuccess = (data) => {
  return {
    type: UPDATE_USER_ADDRESS_SUCCEEDED,
    payload: data
  }
}

// GET ADDRESS
export function getAddress(userId) {
  return {
    type: GET_USER_ADDRESS_REQUEST,
    payload: userId
  }
}

export const getAddressSuccess = (data) => {
  return {
    type: GET_USER_ADDRESS_SUCCEEDED,
    payload: data
  }
}

export function resetAddress() {
  return {
    type: RESET_USER_ADDRESS
  }
}