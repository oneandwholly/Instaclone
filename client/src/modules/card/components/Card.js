import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import comments from '../../comments';

class Card extends Component {

  renderUserInfo(user) {
    if (user) {
      return <div>{user.username}</div>
    }
    return <div>loading user info...</div>
  }

  renderPhoto(photo) {
    if (photo) {
      return <div style={({'width' : '100vw'})}><img style={({ 'width': '100%'})} src={photo.img_url} alt='' /></div>
    }
    return <div>loading photo...</div>
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
        <comments.components.CommentSection comments={this.props.cardComments} photo_id={(this.props.cardPhoto ? this.props.cardPhoto.id : null)} />
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
  ((state, props) => {
    return state.comments.byId;
  }),
  (photoId, allPhotos, allUsers, allComments) => {
    let cardPhoto = null;
    let cardUser = null;
    let cardComments = null;

    if (allPhotos[photoId]) {
      cardPhoto = allPhotos[photoId];

      if (allUsers[cardPhoto.user_id]) {
        cardUser = allUsers[cardPhoto.user_id]
      }

      if (cardPhoto.comments) {
        cardComments = cardPhoto.comments.map((commentId) => {
          return { ...allComments[commentId], username: allUsers[allComments[commentId].user_id].username };
        })
      }
    }

    return { cardPhoto, cardUser, cardComments }
  }
))(Card);
