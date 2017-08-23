import React, { Component } from 'react';
//import Styled_TopBar from './Styled_TopBar';
import styled from 'styled-components';
import logo from '../../../instagram_logo.png';
import { withRouter } from 'react-router-dom';
import options_icon from '../../../assets/icons/options.png';
// import { Link } from 'react-router-dom';

class TopBar extends Component {
  renderLogo() {
    return (
        <img
          style={{
            'maxWidth': '29vw',
            'maxHeight': '6vh',
            'minHeight' : '6vh',
            'minWidth': '100px'
          }}
          src={logo}
          alt='' />
    );
  }

  handleOptionsClick(e) {
    e.preventDefault();
    this.props.toggleOptions();
  }

  renderProfileBar() {
    if (this.props.location.pathname.slice(1) === this.props.authUsername) {
      return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'relative'
          }}>
          <div style={{
              display: 'flex',
              fontFamily: 'Roboto',
              fontWeight: 700,
            }}>
            Profile
          </div>
          <img src={options_icon} style={{
              maxHeight: '3.7vh',
              display: 'flex',
              position: 'absolute',
              right: '2vw'
            }}
            onClick={this.handleOptionsClick.bind(this)}/>
        </div>
      );
    }
    return (
      <div style={{
          fontFamily: 'Roboto',
          fontWeight: 700,
        }}>
        Profile
      </div>
    )
  }

  renderPhotoBar() {
    return (
      <div style={{
          fontFamily: 'Roboto',
          fontWeight: 700,
        }}>
        Photo
      </div>
    )
  }

  render() {
    if (this.props.active === 'home') {
      return (
          <div className={this.props.className}>
            {this.renderLogo()}
          </div>
      )
    }
    if (this.props.active === 'profile') {
      return (
          <div className={this.props.className}>
            {this.renderProfileBar()}
          </div>
      )
    }
    if (this.props.active === 'card') {
      return (
          <div className={this.props.className}>
            {this.renderPhotoBar()}
          </div>
      )
    }
    return <div>none</div>
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

export default withRouter(styledTopBar);
