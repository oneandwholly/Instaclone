import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import auth from '../../auth';
import styled from 'styled-components';

class Options extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history)
  }
  handleBackClick(e) {
    e.preventDefault();
    this.props.toggleOptions();
  }

  render() {
    return (
      <div className={this.props.className}>
        <div onClick={this.handleBackClick.bind(this)}>x</div>
        <button onClick={this.handleLogout.bind(this)}>logout</button>
      </div>
    );
  }
}

const StyledOptions = styled(Options)`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top:0;
`;

export default connect(null, { logoutUser: auth.actions.logoutUser })(StyledOptions);
