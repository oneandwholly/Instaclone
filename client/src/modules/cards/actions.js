import * as c from './actionTypes';

import photos from '../photos';

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
      // dispatch(comments.actions.fetchCommentsByPhotoId(photo.id))
      //   .then((res) => {
      //     dispatch({
      //       type: c.ADD_COMMENTS,
      //       payload: res
      //     })
      //   })
    }
  }
}

export const fetchCardData = (photo_id) => {
  return (dispatch) => {
    dispatch({
      type: c.ADD_PHOTO_ID,
      payload: photo_id
    })
    dispatch(photos.actions.fetchPhotoById(photo_id)).then((res) => {
      console.log(res)
      dispatch({
        type: c.ADD_USER_ID,
        payload: res
      })

    })
  }
}
