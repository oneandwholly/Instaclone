import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import auth from '../../auth';
import users from '../../users';

class App extends Component {
  componentWillMount() {
    if(this.props.authenticated) {
      this.props.getUserFromOwnToken();
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.authenticated === false && newProps.authenticated === true) {
      newProps.getUserFromOwnToken();
    }
  }

  render() {
    return (
      <div>
        <Route path='/' component={auth.components.IndexRoute} />
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    authenticated: auth.selectors.getAuthenticated
  }),{ getUserFromOwnToken: users.actions.getUserFromOwnToken })(App);
