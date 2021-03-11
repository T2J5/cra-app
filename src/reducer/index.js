import { combineReducers } from 'redux';
import user from './user';
import news from './news';

export default combineReducers({
  user,
  news,
});
