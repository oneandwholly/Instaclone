import axios from 'axios';
import * as a from './actionTypes';
import core from '../core';
import users from '../users';
//import * as constants from './constants;'

export const authError = (error) =>
    ({
        type: a.ERROR,
        payload: error
    })

export const authenticateWithToken = (token) => {
  return (dispatch) => {
    dispatch({ type: a.LOGIN });
    dispatch(users.actions.fetchUserByToken(token)).then((res) => {
      dispatch({
        type: a.SET_USER_ID,
        payload: res.id
      })
    })
  }
}

export const signupUser = ({
  username,
  email,
  password
}) =>
  (dispatch) => {
    return axios.post(`${core.constants.ROOT_URL}/api/v1/signup`, {
      username,
      email,
      password
    })
      .then(res => {
        const token = res.data.token;
        // If request is good..
        // - Save the JWT token
        localStorage.setItem('token', token);
        // - Update the state to indicate user is authenticated
        dispatch(authenticateWithToken(token));
      })
      .catch(error => {
        const res = error.response;
        dispatch(authError(res.data.error));
      });
  }

  export const loginUser = ({ username, password }) => {
    return (dispatch) => {
      return axios.post(`${core.constants.ROOT_URL}/api/v1/login`, {
        username,
        password
      })
        .then(res => {
          const token = res.data.token;
          localStorage.setItem('token', token);
          dispatch(authenticateWithToken(token));
        })
        .catch(error => {
          const res = error.response;
          dispatch(authError(res.data.error));
        });
    }
  }

export const logoutUser = (history) => {
  console.log('run')
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
      type: a.LOGOUT
    });
    history.push('/');
  }
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

// export const setAuthUser = () => {
//   return (dispatch) => {
//     //fetch user from token
//     const token = localStorage.getItem('token');
//     dispatch(users.actions.fetchUserByToken(token)).then((res) => {
//       dispatch({
//         type: a.SET_USER_ID,
//         payload: res.id
//       })
//     })
//   }
// }
export const setAuthUserId = (userId) => {
  return (dispatch) => {
    dispatch({
      type: a.SET_USER_ID,
      payload: userId
    })
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
