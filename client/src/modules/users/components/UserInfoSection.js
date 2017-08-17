import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfoSection extends Component {
  render() {
    if (this.props.userId) {
      return <div>{this.props.user.username}</div>
    }
    return <div>loading user info...</div>
  }
}

export default connect((state, props) => {
  let user = null;
  if (props.userId) {
    user = state.users.byId[props.userId];
  }
  return { user };
})(UserInfoSection);
