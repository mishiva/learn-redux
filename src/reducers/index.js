import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


import years from './years';
import user from './user';
import todo from './todo';

export const rootReducer = combineReducers({
  todo,
  years,
  user,
  form: formReducer
});

export default rootReducer;
