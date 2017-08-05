import * as p from './actionTypes';

const initialState = {
  username: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case p.SET_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
}
