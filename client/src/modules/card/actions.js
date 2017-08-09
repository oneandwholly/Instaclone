import photos from '../photos';
import * as c from './actionTypes';
import users from '../users';

export const setCardData = (photo_id) => {
  return (dispatch, getState) => {

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
      //fetchCommentsByPhotoId
    })
  }
}
