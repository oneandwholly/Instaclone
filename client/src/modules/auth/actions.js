import axios from 'axios';
import * as a from './actionTypes';
import app from '../app';
import nav from '../nav';

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
        // If request is good..
        // - Save the JWT token
        localStorage.setItem('token', res.data.token);
        // - Update the state to indicate user is authenticated
        dispatch({ type: a.LOGIN });
        // set active nav to home
        dispatch({
          type: nav.actionTypes.SET_ACTIVE,
          payload: 'home'
        });
      })
      .catch(error => {
        const res = error.response;
        dispatch(authError(res.data.error));
      });
  }
