import { GET_COMMENTS } from '../actions/CommentAction';

const ACTION_HANDLES = {
  [GET_COMMENTS]: (state, action) => {
    if (!state.comment) {
      return Object.assign({}, state, {
        list :[
          {
            cId: 2,
            content: 'test',
            updateTime: 1494834642837,
            authorId: 337,
            authorName: 'kdjf',
            authorIcon: '/styles/imgs/icon.jpg'        
          }
        ]
      });
    }

    return state;
  }
};

const initialState = { list: [] };

export default function commentsReducer (state = initialState, action) {
  const handler = ACTION_HANDLES[action.type];
  return handler ? handler(state, action) : state;
};