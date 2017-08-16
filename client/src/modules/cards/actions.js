import * as c from './actionTypes';

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
