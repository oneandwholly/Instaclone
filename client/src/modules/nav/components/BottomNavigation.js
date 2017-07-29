import React, { Component } from 'react';

import BottomNavigationItem from './BottomNavigationItem';

class BottomNavigation extends Component {
  render() {
    if(this.props.authenticated) {
      const navStyle = {
        'pointerEvents': 'auto',
        'overflow': 'hidden',
        'backgroundColor': '#eee',
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'zIndex': '222',
        'opacity': '1'
      }
      return (
        <nav style={navStyle}>
          <BottomNavigationItem name='home' />
          <BottomNavigationItem name='explore' />
          <BottomNavigationItem name='create' />
          <BottomNavigationItem name='activity' />
          <BottomNavigationItem name='profile' />
        </nav>
      );
    } //else if(!this.props.authenticated && you are looking at card or propfile page)
      //display unauth specific bottom navbar
      else {
        return <div></div>
      }
  }
}

export default BottomNavigation;
