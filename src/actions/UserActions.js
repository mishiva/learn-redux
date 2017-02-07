import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCEEDED,
  GET_USERS_LIST_FAILED,
  GET_USERS_LIST_PROCEEDING
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
