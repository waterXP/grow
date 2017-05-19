import { fetchData, FETCH_FAIL } from './base';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_ABILITIES = 'GET_USER_ABILITIES';

export function getUserInfo () {
  return (dispatch, getState) => {
    fetchData('get /api/user/info', { id: 'wutianba@sina.com' })
    .then((data) => {
      return dispatch({
        type: GET_USER_INFO,
        response: data
      })
    })
    .catch((e) => {
      return dispatch({
        type: FETCH_FAIL,
        err: e
      })
    })
  }
}

export function getUserAbilities () {
  return (dispatch, getState) => {
    fetchData('get /api/user/abilities')
    .then((data) => {
      return dispatch({
        type: GET_USER_ABILITIES,
        response: data
      })
    })
    .catch((e) => {
      return dispatch({
        type: FETCH_FAIL,
        err: e
      })
    })
  }

}

