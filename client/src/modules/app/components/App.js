import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import auth from '../../auth';
import nav from '../../nav';
import photos from '../../photos';
import profiles from '../../profiles';
import cards from '../../cards';

class App extends Component {

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
          <Switch>
            <Route path='/' exact component={this.renderIndexRoute()} />
            <Route path='/p/:photo_id' component={cards.components.CardWrapper} />
            <Route path='/create' exact component={photos.components.Create} />
            <Route path='/:username' component={profiles.components.Profile} />
          </Switch>
          <nav.components.RootNavigation authenticated={this.props.authenticated} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  createStructuredSelector({
    authenticated: auth.selectors.selectAuthenticated
  }))(App);
