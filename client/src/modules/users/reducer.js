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
    case u.SET_PROFILE_USER:
      return { ...state , profileUserId: action.payload };
    default :
      return state;
  }
}
