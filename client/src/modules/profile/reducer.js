import * as p from './actionTypes';

const initialState = {
  username: null,
  userId: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case p.SET_USERNAME:
      return { ...state, username: action.payload };
    case p.SET_USER_ID:
      return { ...state, userId: action.payload };
    case p.SET_USER:
      return { ...state, username: action.payload.username, userId: action.payload.id };
    default:
      return state;
  }
}
