import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

import auth from '../../auth';
import users from '../../users';
import photos from '../../photos';

class Profile extends Component {
  componentWillMount() {
    if (!this.props.previouslyFetchedProfile) {
      this.props.fetchProfile(this.props.givenUsername);
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.previouslyFetchedProfile) {
      //console.log(newProps)
      //console.log('fetch new profile', newProps.previouslyFetchedProfile)
      this.props.fetchProfile(newProps.givenUsername)
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history)
  }

  render() {
    if (this.props.previouslyFetchedProfile) {
      return (
        <div>
          <users.components.UserInfoSection userId={this.props.previouslyFetchedProfile.userId} />
          <button onClick={this.handleLogout.bind(this)}>logout</button>
          <br></br>
          <photos.components.ImageGrid photoIds={this.props.previouslyFetchedProfile.photos} history={this.props.history} />
        </div>
      );
    }
    return <div>loading profile...</div>
  }
}

export default connect((state, props) => {
  const givenUsername = props.match.params.username;
  const previouslyFetchedProfile = state.profiles.byUsername[givenUsername];
  let authUsername = null;
  let isAuthUserProfile = false;

  const authUserId = auth.selectors.selectUserId(state);
  const allUsers = users.selectors.selectAllUsers(state);

  //console.log(authUserId, allUsers)
  if (allUsers[authUserId]) {
    authUsername = allUsers[authUserId].username;
  }

  if (givenUsername === authUsername) {
    isAuthUserProfile = true;
  }

  return { previouslyFetchedProfile, givenUsername, authUsername, isAuthUserProfile };
}, {...actions, logoutUser: auth.actions.logoutUser })(Profile);
