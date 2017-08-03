import * as p from './actionTypes';

const initialState = {
  byId: { }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case p.ADD:
      const { id, img_url, user_id, caption } = action.payload;
      const newById = { ...state.byId, [id]: { id, img_url, user_id, caption } };
      return { ...state, byId: newById };
    default :
      return state;
  }
}
