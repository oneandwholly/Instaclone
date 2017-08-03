import * as u from './actionTypes';

const initialState = {
  byId: { }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case u.ADD:
      const { id, username, email } = action.payload;
      const newById = { ...state.byId, [id]: { id, username, email } };
      return { ...state, byId: newById };
    default :
      return state;
  }
}
