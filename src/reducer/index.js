import { combineReducers } from 'redux';
import user from './user';
import count from './count';

export default combineReducers({
  user,
  count
});
