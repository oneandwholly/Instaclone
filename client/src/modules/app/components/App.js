import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import auth from '../../auth';
import users from '../../users';
import nav from '../../nav';

class App extends Component {
  //get currently logged in user info from existing token
  componentWillMount() {
    if(this.props.authenticated) {
      this.props.getUserFromOwnToken();
    }
  }

  //get user info who just signe up or logged in who just got the token
  componentWillReceiveProps(newProps) {
    if(this.props.authenticated === false && newProps.authenticated === true) {
      newProps.getUserFromOwnToken();
    }
  }

  render() {
    return (
      <div>
        <Route path='/' exact component={auth.components.IndexRoute} />
        <nav.components.RootNavigation authenticated={this.props.authenticated} />
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    authenticated: auth.selectors.getAuthenticated
  }),{ getUserFromOwnToken: users.actions.getUserFromOwnToken })(App);
