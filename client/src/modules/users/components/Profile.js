// import React, { Component } from 'react';
// import { connect} from 'react-redux';
// import { createSelector } from 'reselect';
//
// import * as actions from '../actions';
// import { getAllUsers, getProfileUserId } from '../selectors';
// import photos from '../../photos'
//
// //fetch user by username
// //
// class Profile extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state={ shouldFetchData: true };
//   }
//
//   setShouldFetchDataToFalse() {
//     this.setState({ shouldFetchData: false });
//   }
//
//   componentWillMount() {
//     this.props.getProfileDataByUsername(this.props.match.params.username);
//   }
//   componentWillReceiveProps(newProps) {
//     console.log('this.props', this.props);
//     console.log('newProps', newProps);
//   }
//   render() {
//     console.log('user in profile',this.props.profileUser, 'photos in profile', this.props.profileUserPhotos)
//     return <div>{this.props.match.params.username}</div>
//   }
// }
//
// export default connect(createSelector(
//   getAllUsers,
//   photos.selectors.getAllPhotos,
//   getProfileUserId,
//   (allUsers, allPhotos, profileUserId) => {
//     const profileUserPhotos = Object.keys(allPhotos).reduce((acc, key) => {
//       if (allPhotos[key].user_id === profileUserId) {
//         acc[key] = allPhotos[key];
//       }
//       return acc;
//     },{})
//
//     return {
//       profileUser: allUsers[profileUserId],
//       profileUserPhotos
//     }
//   }
// ), actions)(Profile);
