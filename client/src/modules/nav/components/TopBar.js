import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    const topBarStyle = {
      'pointerEvents': 'auto',
      'overflow': 'hidden',
      'backgroundColor': '#eee',
      'position': 'fixed',
      'top': '0',
      'width': '100%',
      'zIndex': '222',
      'opacity': '1',

      'textAlign': 'center',
      'height': '6vh'
    }
    return (
      <nav style={topBarStyle}>
          
          </nav>
    );
  }
}

export default TopBar;
