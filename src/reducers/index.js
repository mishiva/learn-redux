import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import years from './years';
import user from './user';
import todo from './todo';
import auth from './auth';
import address from './address';
import registration from './registration';

export const rootReducer = combineReducers({
  todo,
  years,
  user,
  auth,
  registration,
  address,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
