import React, { Component } from 'react';
import { connect} from 'react-redux';
import { createSelector } from 'reselect';

import * as actions from '../actions';
import { selectUsername, selectUserId } from '../selectors';
import ImageGrid from './ImageGrid';

import photos from '../../photos';
import users from '../../users';
import auth from '../../auth';
//fetch user by username

class Profile extends Component {
  componentWillMount() {
    // if user clicks profile and clicks away and returns, then it shouldn't
    // fetch the profile data again.
    if (this.props.profileUsername !== this.props.match.params.username) {
      this.props.setProfileUser(this.props.match.params.username);

    }
    //users.actions.fetchUserByUsername(this.props.match.params.username)
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.username !== newProps.match.params.username) {
      this.props.setProfileUser(newProps.match.params.username);
    }
  }
  constructor(props) {
    super(props);

    this.state = { profileUsername: this.props.match.params.username };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history)
  }
  render() {
    if(this.props.profileUsername) {
      return <div>
        <section>
          <br></br>
            <br></br>
            <a onClick={this.handleLogout.bind(this)}>Log Out</a>
              <br></br>
                <br></br>
                  <br></br>
                    <br></br>
                      <br></br>
                        <br></br>
                          <br></br>
                            <br></br>
                              <br></br>
                                <br></br>
                                  <br></br>
                                    <br></br>

        </section>
        <ImageGrid profilePhotos={this.props.profilePhotos}/>
      </div>
    }
    return <div>loading..</div>
  }

  //should fetch user if its not in state,
  foo() {
    if (this.props) {

    }
  }
}

export default connect(createSelector(
  photos.selectors.selectAllPhotos,
  auth.selectors.selectUserId,
  users.selectors.selectAllUsers,
  selectUsername,
  selectUserId,
  (allPhotos, authUserId, allUsers, profileUsername, profileUserId)=> {
    const authUser = allUsers[authUserId];
    let authUsername = null;

    const profileUser = allUsers[profileUserId];
    let profilePhotos = null;

    if (authUser) {
      authUsername = authUser.username;
    }

    if (profileUser) {
      if(profileUser.photos) {
        profilePhotos = profileUser.photos.map(photo_id => allPhotos[photo_id]);
      }
    }

    return { authUsername, profileUsername, profileUserId, profilePhotos }
  }
), { ...actions, logoutUser: auth.actions.logoutUser })(Profile);
