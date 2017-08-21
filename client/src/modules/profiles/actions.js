import users from '../users';
import * as p from './actionTypes';
import photos from '../photos';

export const setNavToProfile = () => {
  return (dispatch) => {
    dispatch({
      type: 'nav/SET_ACTIVE',
      payload: 'profile'
    })
  }
}

export const fetchProfile = (username) => {
  return (dispatch) => {
    dispatch({
      type: p.ADD_USERNAME,
      payload: username
    })
    dispatch(users.actions.fetchUserByUsername(username)).then((res) => {
      dispatch({
        type: p.ADD_USER_ID,
        payload: res
      })
      dispatch(photos.actions.fetchPhotosByUserId(res.id)).then((res) => {
        dispatch({
          type: p.ADD_PHOTOS,
          payload: { username, photos: res }
        })
      })
    })
  }
}
