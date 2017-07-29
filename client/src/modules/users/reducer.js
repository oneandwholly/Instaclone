import * as u from './actionTypes';

const initialState = {
  all: { },
  loggedIn: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case u.ADD:
      const { id, username, email } = action.payload;
      const newAll = { ...state.all, [id]: { id, username, email } };
      return { ...state, all: newAll };
    case u.SET_LOGGED_IN:
      return { ...state, loggedIn: action.payload };
    default :
      return state;
  }
}
