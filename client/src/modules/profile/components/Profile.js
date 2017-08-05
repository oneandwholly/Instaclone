import React, { Component } from 'react';
import { connect} from 'react-redux';
import { createSelector } from 'reselect';

import * as actions from '../actions';
import { selectUsername } from '../selectors';

import users from '../../users';
import auth from '../../auth';
//fetch user by username

class Profile extends Component {
  componentWillMount() {
    console.log('profileUsername', this.props.profileUsername)
    // if user clicks profile and clicks away and returns, then it shouldn't
    // fetch the profile data again.
    if (this.props.profileUsername !== this.props.match.params.username) {
      this.props.setProfileUsername(this.props.match.params.username);

    }
    //users.actions.fetchUserByUsername(this.props.match.params.username)
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.username !== newProps.match.params.username) {
      this.props.setProfileUsername(this.props.match.params.username);
      console.log('should fetch new user')
    }
  }
  constructor(props) {
    super(props);

    this.state = { profileUsername: this.props.match.params.username };
  }
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
  auth.selectors.selectUserId,
  users.selectors.selectAllUsers,
  selectUsername,
  (authUserId, allUsers, profileUsername)=> {
    if (allUsers[authUserId]) {
      return { authUsername: allUsers[authUserId].username, profileUsername }
    }
    return { authUsername: null, profileUsername }
  }
), actions)(Profile);
