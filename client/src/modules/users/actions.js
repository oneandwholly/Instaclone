import axios from 'axios';

import * as u from './actionTypes';
import app from '../app';

export const getUserFromOwnToken = () => {
    return (dispatch) => {
      const token = localStorage.getItem('token');
      if (token) {
        const config = {
          headers: { authorization: token },
          params: {
            token: true
          }
        };
        axios.get(`${app.constants.ROOT_URL}/api/v1/users`, config)
          .then((res) => {
            dispatch({
              type: u.ADD,
              payload: res.data
            });
            dispatch({
              type: u.SET_LOGGED_IN,
              payload: res.data.id
            })
          })
        }
    }
}
