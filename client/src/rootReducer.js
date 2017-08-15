import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './modules/auth';
import users from './modules/users';
//import nav from './modules/nav';
import photos from './modules/photos';
import profiles from './modules/profiles';
//import card from './modules/card';
//import comments from './modules/comments';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [users.constants.NAME]: users.reducer,
//  [nav.constants.NAME]: nav.reducer,
  [photos.constants.NAME]: photos.reducer,
  [profiles.constants.NAME]: profiles.reducer,
//  [card.constants.NAME]: card.reducer,
//  [comments.constants.NAME]: comments.reducer,
  form: formReducer
});

export default rootReducer;
