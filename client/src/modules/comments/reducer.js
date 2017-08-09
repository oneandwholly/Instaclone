import * as c from './actionTypes';

const initialState = {
  byId: { }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case c.ADD:
      const { id, comment_text, user_id, photo_id } = action.payload;
      return { ...state, byId: { ...state.byId, [id]: { comment_text, user_id, photo_id } } };
    default:
      return state;
  }
}
