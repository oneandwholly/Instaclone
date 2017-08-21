import React, { Component } from 'react';
//import Styled_TopBar from './Styled_TopBar';
import styled from 'styled-components';
import logo from '../../../instagram_logo.png';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img style={{
            'maxWidth': '29vw',
            'maxHeight': '6vh',
            'minHeight' : '6vh',
            'minWidth': '100px'
          }} src={logo} />
      </div>
    );
  }
}

const styledTopBar = styled(TopBar)`
pointer-events: auto;
overflow: hidden;
background-color: #fff;
border-bottom: 1px double #e7e7e7;
position: fixed;
top: 0;
width: 100%;
z-index: 222;
opacity: 1;
text-align: center;
height: 6.7vh;
display: flex;
align-items: center;
justify-content: center;
`;

export default styledTopBar;
