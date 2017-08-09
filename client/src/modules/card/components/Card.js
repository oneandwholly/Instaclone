import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { createSelector } from 'reselect';
import { selectPhotoId, selectUserId } from '../selectors';
import photos from '../../photos';
import users from '../../users';

class Card extends Component {

  componentWillMount() {
    this.props.setCardData(this.props.match.params.photo_id)
  }

  render() {
    if (this.props.cardPhoto && this.props.cardUser) {
      return (
        <div>
        <div>
        <br/>
        <br/>
        {this.props.cardUser.username}
        </div>

        <div style={({'width' : '100vw'})}><img style={({ 'width': '100%'})} src={this.props.cardPhoto.img_url} /></div>

        <div><button>like</button><button>comment</button></div>
        <div>number of likes</div>
        <div>comments</div>
        </div>
      );
    }
    return <div>loading card...</div>
  }

}

export default connect(createSelector(
  photos.selectors.selectAllPhotos,
  users.selectors.selectAllUsers,
  selectPhotoId,
  selectUserId,
  (allPhotos, allUsers, photoId, userId) => {
    let cardPhoto = null;
    let cardUser = null;
    if(allPhotos[photoId]) {
      cardPhoto = allPhotos[photoId];
    }
    if(allUsers[userId]) {
      cardUser = allUsers[userId];
    }
    return { cardPhoto, cardUser }
  }
), actions)(Card);
