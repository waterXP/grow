import { GET_USER_INFO, TEST_FETCH } from '../actions/UserInfoAction';
import { FETCH_FAIL, fetchFail } from '../actions/base';

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
  },
  [TEST_FETCH]: (state, action) => {
    console.log(action.data);
    return state;
  },
  [FETCH_FAIL]: fetchFail
};

const initialState = {
  iconUrl: '/styles/imgs/unknown.jpg',
  name: '新用户'
};

export default function userInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
