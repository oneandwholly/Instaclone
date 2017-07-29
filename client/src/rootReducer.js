import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './modules/auth';
import users from './modules/users';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [users.constants.NAME]: users.reducer,
  form: formReducer
});

export default rootReducer;
