import { GET_COMMENTS } from '../actions/CommentsAction';

const ACTION_HANDLES = {
  [GET_COMMENTS]: (state, action) => {
    if (!state.comments) {
      return Object.assign({}, state, [
        {
          id: 2,
          content: 'test',
          updateTime: 1494834642837,
          authorId: 337,
          authorName: 'kdjf',
          authorIcon: '/styles/imgs/icon.jpg'        
        }
      ]);
    }

    return state;
  }
};

const initialState = [];

export default function commentsReducer (state = initialState, action) {
  const handler = ACTION_HANDLES[action.type];
  return handler ? handler(state, action) : state;
};