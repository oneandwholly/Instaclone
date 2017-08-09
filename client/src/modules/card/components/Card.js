import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class Card extends Component {

  renderUserInfo(user) {
    if (user) {
      return <div>{user.username}</div>
    }
    return <div>loading user info...</div>
  }

  renderPhoto(photo) {
    if (photo) {
      return <div style={({'width' : '100vw'})}><img style={({ 'width': '100%'})} src={photo.img_url} /></div>
    }
    return <div>loading photo...</div>
  }

  renderCommentSection(comments) {
    if (comments) {
      <div>comments available</div>
    }
    return <div>loading comments...</div>
  }

  render() {
      return (
        <div>
        <div>
        <br/>
        <br/>
        {this.renderUserInfo(this.props.cardUser)}
        </div>
        {this.renderPhoto(this.props.cardPhoto)}
        <div><button>like</button><button>comment</button></div>
        <div>number of likes</div>
        {this.renderCommentSection(this.props.cardComments)}
        </div>
      );
  }


}

export default connect(createSelector(
  ((state, props) => {
    return props.photo_id
  }),
  ((state, props) => {
    return state.photos.byId;
  }),
  ((state, props) => {
    return state.users.byId;
  }),
  (photoId, allPhotos, allUsers) => {
    let cardPhoto = null;
    let cardUser = null;
    let cardComments = null;

    if (allPhotos[photoId]) {
      cardPhoto = allPhotos[photoId];

      if (allUsers[cardPhoto.user_id]) {
        cardUser = allUsers[cardPhoto.user_id]
      }

      // if (cardPhoto.comments) {
      //   cardComments = cardPhoto.comments.map((commentId) => {
      //     return allComments
      //   })
      // }
    }

    return { cardPhoto, cardUser, cardComments }
  }
))(Card);
