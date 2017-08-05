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

// export const fetchAuthUserFromToken = () => {
//   return (dispatch, getState) => {
//     dispatch(users.actions.fetchUserByToken())
//     .then((res) => {
//       const state = getState()
//       dispatch({
//         type: a.SET_AUTH_USER_ID,
//         payload: res.data.id
//       });
//       dispatch(users.actions.addUser(res.data));
//     })
//   }
// }

export const setAuthUser = () => {
  return (dispatch) => {
    //fetch user from token
    const token = localStorage.getItem('token');
    dispatch(users.actions.fetchUserByToken(token)).then((res) => {
      dispatch({
        type: a.SET_USER_ID,
        payload: res.id
      })
    })
  }
}

export const authenticateIfTokenExists = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      return dispatch({ type: a.LOGIN });
    }
    dispatch({ type: 'TOKEN_DOES_NOT_EXIST' });
  }
}


// export const fetchCurrentUser = () => {
//   return (dispatch, getState) => {
//     return dispatch(getUserIdFromToken()).then(() => {
//       const user_id = getState().auth.currentUserId;
//       return dispatch(users.actions.getUserById(user_id));
//     })
//   }
// }
