import photos from '../photos';
import * as c from './actionTypes';
import users from '../users';

export const setCardData = (photo_id) => {
  return (dispatch, getState) => {
    let photo = getState()['photos'].byId[photo_id];
    if(photo) {
      dispatch({
        type: 'PHOTO_ALREADY_EXISTS'
      });
      dispatch({
        type: c.SET_PHOTO,
        payload: photo_id
      })
      let user = getState()['users'].byId[photo.user_id]
      if(user) {
        dispatch({
          type: 'USER_ALREADY_EXISTS'
        });
        dispatch({
          type: c.SET_USER,
          payload: user.id
        })
      } else {
        dispatch(users.actions.fetchUserById(user.id)).then((res) => {
          dispatch({
            type: c.SET_USER,
            payload: res.id
          });
        })
      }
      return
    }
    return dispatch(photos.actions.fetchPhotoById(photo_id)).then((res) => {
      dispatch({
        type: c.SET_PHOTO,
        payload: res.id
      });
      dispatch(users.actions.fetchUserById(res.user_id)).then((res) => {
        dispatch({
          type: c.SET_USER,
          payload: res.id
        });
      })
    })
  }
}
