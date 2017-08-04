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
    default :
      return state;
  }
}
