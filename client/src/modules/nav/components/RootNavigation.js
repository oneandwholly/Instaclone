import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getActive } from '../selectors';

import BottomNavigation from './BottomNavigation';
import UnauthNav from './UnauthNav';
import * as actions from '../actions';

class RootNavigation extends Component {
  componentWillMount() {
    //console.log('this.props in RootNavigation.componentWillMount', this.props)
  }
  componentWillReceiveProps(newProps) {
    //console.log('newProps in RootNavigation.componentWillReceiveProps',newProps);
  }

  renderBottomNavigation() {
    if(this.props.authenticated) {
      return <BottomNavigation />
    }
    return <UnauthNav />
  }

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
      {this.renderBottomNavigation()}
    </div>
  }
}

export default connect(createStructuredSelector({
  active: getActive
}), actions)(RootNavigation);
