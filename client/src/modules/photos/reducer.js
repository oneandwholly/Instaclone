import * as p from './actionTypes';

const initialState = {
  byId: { }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case p.ADD:
      const { id, img_url, user_id, caption } = action.payload;
      return { ...state, byId: { ...state.byId, [id]: { id, img_url, user_id, caption } } };
    case p.ADD_ARRAY:
      const newPhotos = action.payload;
      const newById = { ...state.byId };
      newPhotos.forEach((photo) => {
        newById[photo.id] = photo;
      })
      return { ...state, byId: newById };
    case p.ADD_COMMENTS:
      let photo_id = action.payload.photo_id;
      const photo = state.byId[photo_id];
      const newComments = action.payload.comments.map(comment => comment.id);
      if (photo.comments) {
        return { ...state, byId: { ...state.byId, [photo_id]: { ...state.byId[photo_id], comments: [...state.byId[photo_id].comments, ...newComments ] } }}
      }
      return { ...state, byId: { ...state.byId, [photo_id]: { ...state.byId[photo_id], comments: newComments } }}
    default :
      return state;
  }
}
