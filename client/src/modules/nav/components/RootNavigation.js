import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BottomNavigation from './BottomNavigation';
import * as actions from '../actions';

class RootNavigation extends Component {
  render() {
    const transparentStyle = {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'zIndex': '111',
    'backgroundColor': 'rgba(0,0,255,0)',
    'pointerEvents': 'none',
    'width': '100%',
    'height': '100%'
}
    return <div style={transparentStyle}>
      <BottomNavigation authenticated={this.props.authenticated}/>
    </div>
  }
}

export default connect(null, actions)(RootNavigation);
