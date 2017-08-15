import * as p from './actionTypes';

const initialState = {
  byUsername : {
    'username': {
      userId: 0,
      photos: []
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case p.ADD_USERNAME:
      return { ...state, byUsername: { ...state.byUsername, [action.payload]: {}}}
    case p.ADD_USER_ID:
      let newByUsername = { ...state.byUsername, [action.payload.username]: { userId: action.payload.id, photos: null } };
      return { ...state, byUsername: newByUsername };
    case p.ADD_PHOTOS:
      let username = action.payload.username;
      return { ...state, byUsername: { ...state.byUsername, [username]: { ...state.byUsername[username], photos: action.payload.photos.map(photo => photo.id) } }}
    case 'auth/LOGOUT':
      return initialState;
    default:
      return state;
  }
}
