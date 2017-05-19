export const CHANGE_TYPE = 'CHANGE_TYPE';

export function changeType (type) {
  return {
    type: CHANGE_TYPE,
    newType: type
  }
};
