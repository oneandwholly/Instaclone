import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//import styled from 'styled-components';

import auth from '../../auth';
import nav from '../../nav';
import photos from '../../photos';
import profiles from '../../profiles';
import cards from '../../cards';
import home from '../../home';

class App extends Component {

  renderIndexRoute() {
    if (this.props.authenticated) {
      return home.components.Feed;
    }
    return auth.components.IndexRoute;
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{
            'marginTop': '6.8vh',
            'marginBottom': '6.8vh'
          }}>
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
