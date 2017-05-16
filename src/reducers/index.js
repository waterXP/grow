import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import abilitiesReducer from './abilitiesReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  user: userInfoReducer,
  abilities: abilitiesReducer,
  comments: commentsReducer
});
