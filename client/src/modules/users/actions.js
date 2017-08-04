import axios from 'axios';

import * as u from './actionTypes';
import app from '../app';
import photos from '../photos';

export const getUserById = (user_id) => {
    return (dispatch) => {
        const config = {
          headers: { authorization: localStorage.getItem('token') }
        };
        return axios.get(`${app.constants.ROOT_URL}/api/v1/users/${user_id}`, config)
          .then((res) => {
            console.log('user',res.data)
            if(res.data) {
              dispatch({
                type: u.ADD,
                payload: res.data
              });
            }
          })
    }
}

export const getUserByUsername = (username, isForProfile) => {
  return (dispatch) => {
      const config = {
        headers: { authorization: localStorage.getItem('token') },
        params: {
          username
        }
      };
      return axios.get(`${app.constants.ROOT_URL}/api/v1/users/`, config)
        .then((res) => {
          dispatch({
            type: u.ADD,
            payload: res.data
          });

          if(isForProfile) {
            dispatch({
              type: u.SET_PROFILE_USER,
              payload: res.data.id
            });
          }
        })
  }
}

export const getProfileDataByUsername = (username) => {
  return (dispatch, getState) => {
    return dispatch(getUserByUsername(username, true)).then(() => {
      const user_id = getState().users.profileUserId;
      return dispatch(photos.actions.getPhotosByUserId(user_id));
    })
  }
}
