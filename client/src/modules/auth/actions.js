import axios from 'axios';
import * as a from './actionTypes';
import app from '../app';

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
    axios.post(`${app.constants.ROOT_URL}/api/v1/signup`, {
      username,
      email,
      password
    })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // If request is good..
        // - Update the state to indicate user is authenticated
        dispatch({ type: a.LOGIN });
        // - Save the JWT token
      })
      .catch(error => {
        const res = error.response;
        dispatch(authError(res.data.error));
      });
  }
