import { TO_PAGE } from '../actions/BaseAction';

const ACTION_HANDLES = {
  [TO_PAGE]: (state, action) => {
    return Object.assign({}, state, {
      page: action.page
    })
  }
};

const initialState = {
  page: 'main'
};

export default function BaseReducer (state = initialState, action) {
  const handler = ACTION_HANDLES[action.type];
  return handler ? handler(state, action) : state;
};
