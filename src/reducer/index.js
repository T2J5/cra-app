import { combineReducers } from 'redux';
import user from './user';
import news from './news';
import weather from './weather';

export default combineReducers({
  user,
  news,
  weather,
});
