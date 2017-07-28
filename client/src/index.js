import React from 'react';
import ReactDOM from 'react-dom';
import app from './modules/app';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <app.components.App />
    </Router>
  </Provider>, document.getElementById('root'));
