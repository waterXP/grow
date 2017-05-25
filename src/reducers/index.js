import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import userReducer from './userReducer';
import abilityReducer from './abilityReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  base: baseReducer,
  user: userReducer,
  ability: abilityReducer,
  comment: commentReducer
});
