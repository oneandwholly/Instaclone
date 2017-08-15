import React, { Component } from 'react';

class UserInfoSection extends Component {
  render() {
    if (this.props.userId) {
      return <div>{this.props.userId}</div>
    }
    return <div>loading user info...</div>
  }
}

export default UserInfoSection;
