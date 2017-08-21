import * as p from './actionTypes';

import users from '../users';
import photos from '../photos';
import nav from '../nav';

export const setProfileUsername = (username) => {
  return (dispatch) => {
    dispatch({
      type: p.SET_USERNAME,
      payload: username
    });
  }
}

export const setProfileUser = (username) => {
  return (dispatch) => {
    dispatch(users.actions.fetchUserByUsername(username)).then((res) => {
      dispatch({
        type: p.SET_USER,
        payload: res
      });
      console.log('rung')
      dispatch(nav.actions.selectNavigationItem('profile'));
      const user_id = res.id;
      dispatch(photos.actions.fetchPhotosByUserId(user_id)).then((res) => {
        dispatch(users.actions.addPhotosToUser(user_id, res))
      })
    })
  }
}
