import { GET_USER_INFO } from '../actions/UserInfoAction';

const ACTION_HANDLERS = {
  [GET_USER_INFO]: (state, action) => {
    if (!state.user) {
      return Object.assign({}, state, {
        iconUrl: '/styles/imgs/unknown.jpg',
        name: '测试中',
        age: 21,
        job: '蓝翔工程师'
      });
    }
    
    return state;
  }
};

const initialState = {
  iconUrl: '/styles/imgs/unknown.jpg',
  name: '新用户'
};

export default function userInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
