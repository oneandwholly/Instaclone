import * as a from './actionTypes';

const initialState = {
  authenticated: false,
  userId: null,
  error: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case a.LOGIN:
      return { ...state, error: '', authenticated: true };
    case a.LOGOUT:
      return { ...state, error: '', authenticated: false };
    case a.SET_USER_ID:
      return { ...state, userId: action.payload };
    case a.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
    }
}
