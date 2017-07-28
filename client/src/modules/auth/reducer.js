import * as a from './actionTypes';

const initialState = {
  authenticated: false,
  error: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case a.LOG_IN:
      return { ...state, error: '', authenticated: true };
    case a.LOG_OUT:
      return { ...state, error: '', authenticated: false };
    case a.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
    }
}
