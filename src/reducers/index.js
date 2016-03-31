import { combineReducers } from 'redux';
import page from './page';
import user from './user';
import todo from './todo';

export const rootReducer = combineReducers({
  todo,
  page,
  user
});

export default rootReducer;
