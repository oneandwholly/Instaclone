import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './modules/auth';
import users from './modules/users';
import nav from './modules/nav';
import photos from './modules/photos';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [users.constants.NAME]: users.reducer,
  [nav.constants.NAME]: nav.reducer,
  [photos.constants.NAME]: photos.reducer,
  form: formReducer
});

export default rootReducer;
