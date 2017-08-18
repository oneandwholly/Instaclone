import React, { Component } from 'react';
//import Styled_TopBar from './Styled_TopBar';
import styled from 'styled-components';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        wut
      </div>
    );
  }
}

const styledTopBar = styled(TopBar)`
pointer-events: auto;
overflow: hidden;
background-color: #eee;
position: fixed;
top: 0;
width: 100%;
z-index: 222;
opacity: 1;
text-align: center;
height: 6.8vh;
`;

export default styledTopBar;
