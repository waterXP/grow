import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  user: userInfoReducer,
  comments: commentsReducer
});
