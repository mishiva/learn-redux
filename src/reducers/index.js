import { combineReducers } from 'redux';
import years from './years';
import user from './user';
import todo from './todo';

export const rootReducer = combineReducers({
  todo,
  years,
  user
});

export default rootReducer;
