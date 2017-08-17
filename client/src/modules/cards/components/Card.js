import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  componentWillMount() {

  }

  renderUserInfo(user) {
    if(user) {
      return <div>{user.username}</div>
    }
    return <div>loading user...</div>
  }

  renderPhoto(photo) {
    if(photo) {
      return <div><img alt='' src={photo.img_url} /></div>
    }
    return <div>loading photo...</div>
  }

  renderComments(comments) {
    if(comments) {
      return <div></div>
    }
    return <div>loading comments</div>
  }

  render() {
    return (
      <div>
        {this.renderUserInfo(this.props.user)}
        {this.renderPhoto(this.props.photo)}
        {this.renderComments(this.props.comments)}
      </div>
    );
  }
}

export default connect((state, props) => {
  let user = null;
  let photo = null;
  let comments = null;

  user = state.users.byId[props.data.userId];
  photo = state.photos.byId[props.photo_id];

  return { user, photo, comments }
})(Card);
