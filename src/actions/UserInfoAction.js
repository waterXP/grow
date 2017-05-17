import { fetchData, FETCH_FAIL } from './base'

export const GET_USER_INFO = 'GET_USER_INFO';

/** remeber delete this */
export const TEST_FETCH = 'TEST_FETCH';

export function testFetch () {
  return (dispatch, getState) => {
    fetchData('get /api/test')
    .then((data) => {
      return dispatch({
        type: TEST_FETCH,
        data: data
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
/** remeber */

export function getUserInfo () {
  return {
    type: GET_USER_INFO
  };
};
