import { combineReducers } from 'redux';
import page from './page';
import user from './user';

export const rootReducer = combineReducers({
  page,
  user
});

export default rootReducer;
