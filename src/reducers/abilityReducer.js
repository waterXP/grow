import { CHANGE_TYPE } from '../actions/AbilityAction';

const ACTION_HANDLES = {
  [CHANGE_TYPE]: (state, action) => {
    return Object.assign({}, state, {
      viewType: action.newType
    })
  }
};

const initialState = { viewType: 'canvas' };

export default function abilitiesReducer (state = initialState, action) {
  const handler = ACTION_HANDLES[action.type];
  return handler ? handler(state, action) : state;  
}
