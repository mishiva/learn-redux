import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


import years from './years';
import user from './user';
import todo from './todo';
import auth from './auth';
import registration from './registration';

export const rootReducer = combineReducers({
  todo,
  years,
  user,
  auth,
  registration,
  form: formReducer
});

export default rootReducer;
