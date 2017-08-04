import React, { Component } from 'react';
import { connect} from 'react-redux';
import { createSelector } from 'reselect';

import users from '../../users';
import auth from '../../auth';
//fetch user by username

class Profile extends Component {
  render() {
    return <div></div>
  }

  //should fetch user if its not in state,
  foo() {
    if (this.props) {

    }
  }
}

export default connect(createSelector(
  auth.selectors.selectAuthUserId,
  users.selectors.selectAllUsers,
  (authUserId, allUsers)=> {
    if (allUsers[authUserId]) {
      return { authUsername: allUsers[authUserId].username }
    }
    return { authUsername: null }
  }
))(Profile);
