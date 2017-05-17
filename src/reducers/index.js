import { combineReducers } from 'redux';
import userReducer from './userReducer';
import abilityReducer from './abilityReducer';
import commentReducer from './commentReducer';


export default combineReducers({
  user: userReducer,
  ability: abilityReducer,
  comment: commentReducer
});
