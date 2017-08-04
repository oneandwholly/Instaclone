import axios from 'axios';
import * as a from './actionTypes';
import app from '../app';
import users from '../users';
//import * as constants from './constants;'

export const authError = (error) =>
    ({
        type: a.ERROR,
        payload: error
    })

export const signupUser = ({
  username,
  email,
  password
}) =>
  (dispatch) => {
    console.log({
      username,
      email,
      password
})
    return axios.post(`${app.constants.ROOT_URL}/api/v1/signup`, {
      username,
      email,
      password
    })
      .then(res => {
        // If request is good..
        // - Save the JWT token
        localStorage.setItem('token', res.data.token);
        // - Update the state to indicate user is authenticated
        dispatch({ type: a.LOGIN });
      })
      .catch(error => {
        const res = error.response;
        dispatch(authError(res.data.error));
      });
  }

export const getUserIdFromToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: { authorization: token },
        params: {
          token: true
        }
      };

      return axios.get(`${app.constants.ROOT_URL}/api/v1/users`, config)
        .then((res) => {
          dispatch({
            type: a.SET_CURRENT_USER,
            payload: res.data
          });
        });
    }
  }
}


export const setCurrentUser = () => {
  return (dispatch, getState) => {
    return dispatch(getUserIdFromToken()).then(() => {
      const user_id = getState().auth.currentUserId;
      return dispatch(users.actions.getUserById(user_id));
    })
  }
}
