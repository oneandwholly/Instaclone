import * as p from './actionTypes';

export const setProfileUsername = (username) => {
  return (dispatch) => {
    dispatch({
      type: p.SET_USERNAME,
      payload: username
    });
  }
}
