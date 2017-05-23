import { GET_USER_INFO } from '../actions/UserAction';
import { FETCH_FAIL, fetchFail } from '../actions/base';

const ACTION_HANDLERS = {
  [GET_USER_INFO]: (state, action) => {
    const res = action.response;
    if (res.code === 200) {
      const data = res.data;
      return Object.assign({}, state, {
        iconUrl: data.iconUrl,
        name: data.name,
        job: data.job,
        age: data.age,
        updateTime: data.updateTime
      });
    }
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
