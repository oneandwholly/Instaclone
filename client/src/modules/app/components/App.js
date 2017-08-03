import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import auth from '../../auth';
import nav from '../../nav';
import photos from '../../photos';

class App extends Component {
  //get currently logged in user info from existing token
  componentWillMount() {
    if(this.props.authenticated) {
      this.props.setCurrentUser();
    }
  }

  //get user info from who just signed up or logged in
  componentWillReceiveProps(newProps) {
    if(this.props.authenticated === false && newProps.authenticated === true) {
      newProps.setCurrentUser();
    }
  }

  renderIndexRoute() {
    if (this.props.authenticated) {
      return photos.components.HomeFeed;
    }
    return auth.components.IndexRoute;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={this.renderIndexRoute()} />
          <Route path='/p/:photo_id' component={photos.components.Card} />
          <Route path='/create' component={photos.components.Create} />
          <nav.components.RootNavigation authenticated={this.props.authenticated} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  createStructuredSelector({
    authenticated: auth.selectors.getAuthenticated
  }),{ setCurrentUser: auth.actions.setCurrentUser })(App);
