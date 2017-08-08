import axios from 'axios';

import * as u from './actionTypes';
import app from '../app';
import photos from '../photos';

export const fetchUserByToken = (token) => {
  return (dispatch) => {
    dispatch({type: 'IS_FETCHING_USER_BY_TOKEN'})
    const config = {
      headers: { authorization: token },
      params: {
        onlyToken: true
      }
    };
      return axios.get(`${app.constants.ROOT_URL}/api/v1/users`, config)
      .then((res) => {
        dispatch({type: 'SUCCESS_FETCHING_USER_BY_TOKEN'})
        if(res.data) {
          dispatch({
            type: u.ADD,
            payload: res.data
          });
        }
        return res.data;
      })
      .catch((err) => {
        dispatch({type: 'FAIL_FETCHING_USER_ID_BY_TOKEN'})
      })
    };
  }

export const fetchUserByUsername = (username) => {
  return (dispatch) => {
    dispatch({type: 'IS_FETCHING_USER_BY_USERNAME'})
    const config = {
      headers: { authorization: localStorage.getItem('token') },
      params: {
        username
      }
    };
      return axios.get(`${app.constants.ROOT_URL}/api/v1/users`, config)
      .then((res) => {
        dispatch({type: 'SUCCESS_FETCHING_USER_BY_USERNAME'})
        if(res.data) {
          dispatch({
            type: u.ADD,
            payload: res.data
          });
        }
        return res.data;
      })
      .catch((err) => {
        dispatch({type: 'FAIL_FETCHING_USER_ID_BY_USERNAME'})
      })
  }
}

export const addPhotosToUser = (user_id, photos) => {
  return (dispatch) => {
    dispatch({
      type: u.ADD_PHOTOS,
      payload: { user_id, photos }
    })
  }
}

/*------------------------------------------------*/

export const getUserById = (user_id) => {
    return (dispatch) => {
        const config = {
          headers: { authorization: localStorage.getItem('token') }
        };
        return axios.get(`${app.constants.ROOT_URL}/api/v1/users/${user_id}`, config)
          .then((res) => {
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

// export const addUser = (user) => {
//   return (dispatch) => {
//     return dispatch({
//       type: u.ADD,
//       payload: user
//     })
//   }
// }

export const addUser = (user) => ({
  type: u.ADD,
  payload: user
})
