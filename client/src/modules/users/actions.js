import axios from 'axios';

import * as u from './actionTypes';
import app from '../app';

export const getUserById = (user_id) => {
    return (dispatch) => {
        const config = {
          headers: { authorization: localStorage.getItem('token') }
        };
        return axios.get(`${app.constants.ROOT_URL}/api/v1/users/${user_id}`, config)
          .then((res) => {
            dispatch({
              type: u.ADD,
              payload: res.data
            });
          })
    }
}

export const getUserByUsername = (username) => {
  return (dispatch) => {
      const config = {
        headers: { authorization: localStorage.getItem('token') }
      };
      return axios.get(`${app.constants.ROOT_URL}/api/v1/users/${}`, config)
        .then((res) => {
          dispatch({
            type: u.ADD,
            payload: res.data
          });
        })
  }
}
