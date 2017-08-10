import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewComment from './NewComment';
import { Link } from 'react-router-dom';

class CommentSection extends Component {
  renderCommentList(comments) {
    if (comments) {
      return comments.map((comment) => {
        console.log(comment)
        return <div key={(`${this.props.photo_id}/${comment.id}`)}><Link to={(`/${comment.username}`)}>{comment.username}</Link> {comment.comment_text}</div>
      })
    }
    return <div>loading comments...</div>
  }

  render() {
    return (
      <div>
        {this.renderCommentList(this.props.comments)}
        <NewComment photo_id={this.props.photo_id}/>
      </div>
    );
  }
}

export default connect()(CommentSection);
