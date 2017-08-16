import * as c from './actionTypes';

const initialState = {
  byPhotoId: {
    0: {
        userId: null,
        comments: null
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case c.ADD_PHOTO_ID:
      return { ...state, byPhotoId: { ...state.byPhotoId, [action.payload]: { } } }
    case c.ADD_USER_ID:
      let newByPhotoId = { ...state.byPhotoId, [action.payload.id]: { userId: action.payload.user_id, comments: null } };
      return { ...state, byPhotoId: newByPhotoId };
    case c.ADD_COMMENTS:
      return state;
    default:
      return state;
  }
}
