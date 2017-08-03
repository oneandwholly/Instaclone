import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UnauthNav extends Component {
  render() {
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
          <Link to='/'>Signup</Link>
        </nav>
      );
  }
}

export default UnauthNav;
