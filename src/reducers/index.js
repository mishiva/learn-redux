import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


import years from './years';
import user from './user';
import todo from './todo';
import auth from './auth';

export const rootReducer = combineReducers({
  todo,
  years,
  user,
  auth,
  form: formReducer
});

export default rootReducer;
