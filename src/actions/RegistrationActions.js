import { submit } from 'redux-form'
import {
  REGISTRATION_REQUEST,
  REGISTRATION_RESPONSE,
  REGISTRATION_PROCEEDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL
} from '../constants/Registration'


// REGISTRATION
export const regResponse = (data) => {
  return {
    type: REGISTRATION_RESPONSE,
    payload: data
  }
}

export const regSuccess = (data) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: data
  }
}

export const regFail = (data) => {
  return {
    type: REGISTRATION_FAIL,
    payload: data
  }
}

export const regProceeding = (regProceeding) => {
  return {
    type: REGISTRATION_PROCEEDING,
    payload: regProceeding
  }
}

export const regRequest = (data, resolve, reject) => {
  return {
    type: REGISTRATION_REQUEST,
    payload: {
      data, resolve, reject
    }
  }
}

export const submitForm = () => {
  return submit('regForm')
}
