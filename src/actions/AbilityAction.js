import { fetchData, FETCH_FAIL } from './base';

export const CHANGE_TYPE = 'CHANGE_TYPE';
export const GET_USER_ABILITIES = 'GET_USER_ABILITIES';
export const DRAW_ABILITIES = 'DRAW_ABILITIES';

export function changeType (type) {
  return {
    type: CHANGE_TYPE,
    newType: type
  }
};

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

export function drawAbilities (canvas) {
  return (dispatch, getState) => {
    fetchData('get /api/user/abilities')
    .then((data) => {
      return dispatch({
        type: DRAW_ABILITIES,
        response: data,
        target: canvas
      })
    })
    .catch((e) => {
      return dispatch({
        type: FETCH_FAIL,
        err: e
      })
    })
  }
};
