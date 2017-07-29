import * as n from './actionTypes';


const initialState = {
  active: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case n.SET_ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
