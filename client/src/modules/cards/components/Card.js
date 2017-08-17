import React, { Component } from 'react';
import { connect } from 'react-redux';
import comments_module from '../../comments';
import { Link } from 'react-router-dom'

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

  renderComments(comments, photo_id) {
    if(comments) {
      return (
        <div>
          {comments.map(comment => <div key={(`${comment.user_id}/${comment.id}`)}><Link to={(`/${comment.username}`)}>{comment.username}</Link> {comment.comment_text}</div>)}
          <comments_module.components.NewComment photo_id={this.props.photo_id} />
        </div>
      );
    }
    return (
      <div>
        loading comments ...
        <comments_module.components.NewComment photo_id={this.props.photo_id} />
      </div>
    )
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
  if (props.data.comments) {
    comments = props.data.comments.map(commentId => {
      if (state.users.byId[state.comments.byId[commentId].user_id]) {
        return { ...state.comments.byId[commentId], username: state.users.byId[state.comments.byId[commentId].user_id].username }
      }
      return state.comments.byId[commentId]
    })
  }

  return { user, photo, comments }
})(Card);
