import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import auth from '../../auth';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={auth.components.IndexRoute} />
      </div>
    );
  }
}

export default App;
