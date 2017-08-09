import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewComment from './NewComment';

class CommentSection extends Component {
  renderCommentList(comments) {
    if (comments) {
      return comments.map((comment) => {
        return <div key={comment.id}>{comment.comment_text}</div>
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
