import * as c from './actionTypes';

import photos from '../photos';
import comments from '../comments';
import users from '../users';

export const fetchCardDataBeforeTransitioning = (photo, history) => {
  return (dispatch, getState) => {
    let shouldFetchData = getState()['cards'].byPhotoId[photo.id] ? false : true;
    if (shouldFetchData) {
      dispatch({
        type: c.ADD_PHOTO_ID,
        payload: photo.id
      })
    }
    history.push(`/p/${photo.id}`)
    if (shouldFetchData) {
      dispatch({
        type: c.ADD_USER_ID,
        payload: photo
      })
      dispatch(comments.actions.fetchCommentsByPhotoId(photo.id))
        .then((res) => {
          dispatch({
            type: c.ADD_COMMENTS,
            payload: { comments: res, photo_id: photo.id }
          })
          let commentUsers = res.reduce((acc, comment) => {
            if (!acc.mem[comment.user_id]) {
              acc.uniqueUserIds.push(comment.user_id);
              acc.mem[comment.user_id] = true;
            }
            return acc;
          }, { mem:{}, uniqueUserIds: [] }).uniqueUserIds
          commentUsers.forEach((userId) => {
            if (!getState()['users'].byId[userId]) {
              dispatch(users.actions.fetchUserById(userId))
            }
          })
        })
    }
  }
}

export const fetchCardData = (photo_id) => {
  return (dispatch, getState) => {
    dispatch({
      type: c.ADD_PHOTO_ID,
      payload: photo_id
    })
    dispatch(photos.actions.fetchPhotoById(photo_id)).then((res) => {
      dispatch({
        type: c.ADD_USER_ID,
        payload: res
      })
      dispatch(comments.actions.fetchCommentsByPhotoId(photo_id))
        .then((res) => {
          dispatch({
            type: c.ADD_COMMENTS,
            payload: { comments: res, photo_id }
          })
          let commentUsers = res.reduce((acc, comment) => {
            if (!acc.mem[comment.user_id]) {
              acc.uniqueUserIds.push(comment.user_id);
              acc.mem[comment.user_id] = true;
            }
            return acc;
          }, { mem:{}, uniqueUserIds: [] }).uniqueUserIds
          commentUsers.forEach((userId) => {
            if (!getState()['users'].byId[userId]) {
              dispatch(users.actions.fetchUserById(userId))
            }
          })
        })
    })
  }
}

export const addCommentToCard = (comment) => {
  return (dispatch) => {
    dispatch({
      type: c.ADD_COMMENT,
      payload: comment
    })
  }
}
