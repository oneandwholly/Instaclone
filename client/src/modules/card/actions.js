import photos from '../photos';
import * as c from './actionTypes';
import users from '../users';
import comments from '../comments';

export const setCardData = (photo_id) => {
  return (dispatch, getState) => {

    return dispatch(photos.actions.fetchPhotoById(photo_id)).then((res) => {
      dispatch({
        type: c.SET_PHOTO,
        payload: res.id
      });
      dispatch(comments.actions.fetchCommentsByPhotoId(photo_id)).then((res) => {
        Promise.all(res.map((comment) => {
          return dispatch(users.actions.fetchUserById(comment.user_id));
        })).then(() => {
          dispatch(photos.actions.addCommentsToPhoto({photo_id, comments: res}))
        })
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
