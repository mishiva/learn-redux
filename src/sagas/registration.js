import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import {
  REGISTRATION_REQUEST
} from '../constants/Registration'
import * as authActions from '../actions/RegistrationActions'
import CONFIG from '../config';
import { SubmissionError } from 'redux-form';

function regUserApi(data) {
  return fetch(
    `${CONFIG.apiUrl}/registration`
    ,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      return response.json()
    })
    .then(json => json)
}

function addValidationErrors(errors) {
    if (!errors) return;
    const validErrors = {};
     errors.forEach((item) => {
      validErrors[item.path] = item.message;
      validErrors['_error'] = 'Validation Error!';
    });
    console.log(validErrors);
    return new SubmissionError(validErrors);
}

function* regUser(action) {
  try {
    yield put(authActions.regProceeding(true));
    const res = yield call(regUserApi, action.payload.data);
    yield put(authActions.regResponse(res));
    if (!res.success) {
      yield call(action.payload.reject, addValidationErrors(res.errors) );
    }
  } catch (e) {
    yield put(authActions.regResponse({serverMessage: e.message, success: false}));
  }
}

export function* watchRegistrationRequest() {
  yield* takeEvery(REGISTRATION_REQUEST, regUser)
}

