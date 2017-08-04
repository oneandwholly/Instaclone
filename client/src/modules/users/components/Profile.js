import React, { Component } from 'react';
import { connect} from 'react-redux';
import { createSelector } from 'reselect';

import * as actions from '../actions';
import { getAllUsersById, getProfileUserId } from '../selectors';
import photos from '../../photos'

//fetch user by username
//
class Profile extends Component {
  componentWillMount() {
    this.props.getProfileDataByUsername(this.props.match.params.username);
  }
  componentWillReceiveProps(newProps) {
    console.log('running', this.props, newProps)
    if( this.props.profileUser && ( this.props.profileUser.id !== newProps.match.params.username )) {
      newProps.getProfileDataByUsername(newProps.match.params.username);
    }
  }
  render() {
    console.log('user in profile',this.props.profileUser, 'photos in profile', this.props.profileUserPhotos)
    return <div>{this.props.match.params.username}</div>
  }
}

export default connect(createSelector(
  getAllUsersById,
  photos.selectors.getAllPhotos,
  getProfileUserId,
  (allUsers, allPhotos, profileUserId) => {
    const profileUserPhotos = Object.keys(allPhotos).reduce((acc, key) => {
      if (allPhotos[key].user_id === profileUserId) {
        acc[key] = allPhotos[key];
      }
      return acc;
    },{})

    return {
      profileUser: allUsers[profileUserId],
      profileUserPhotos
    }
  }
), actions)(Profile);
