import * as c from './actionTypes';

const initialState = {
  byId: { }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case c.ADD:
      const { id, comment_text, user_id, photo_id } = action.payload;
      return { ...state, byId: { ...state.byId, [id]: { id, comment_text, user_id, photo_id } } };
    case c.ADD_ARRAY:
      let newById = { ...state.byId }
      action.payload.forEach((comment) => {
        newById[comment.id] = comment;
      })
      return { ...state, byId: newById };
    default:
      return state;
  }
}
