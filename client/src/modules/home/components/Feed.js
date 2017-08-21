import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feed extends Component {
  componentWillMount() {
    this.props.setNavToHome();
  }
  render(){
    return <div>feed</div>
  }
}

export default connect(null, actions)(Feed);
