import * as c from './actionTypes';

const initialState = {
  photoId: null,
  userId: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case c.SET_PHOTO:
      return { ...state, photoId: action.payload }
    case c.SET_USER:
      return { ...state, userId: action.payload }
    default:
      return state;
  }
}
