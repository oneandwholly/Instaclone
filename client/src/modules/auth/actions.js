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

export const fetchAuthUserFromToken = () => {
  return (dispatch) => {
    dispatch({type: 'IS_FETCHING_USER_FROM_TOKEN'})
    const token = localStorage.getItem('token');
    const config = {
      headers: { authorization: token },
      params: {
        onlyToken: true
      }
    };
    return axios.get(`${app.constants.ROOT_URL}/api/v1/users`, config)
    .then((res) => {
      dispatch({type: 'SUCCESS_FETCHING_USER_FROM_TOKEN'})
      dispatch({
        type: a.SET_AUTH_USER_ID,
        payload: res.data.id
      });
      dispatch({
        type: users.actionTypes.ADD,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({type: 'FAIL_FETCHING_USER_ID_FROM_TOKEN'})
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
