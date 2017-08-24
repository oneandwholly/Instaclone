import React, { Component } from 'react';
import { connect } from 'react-redux';
import comments_module from '../../comments';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import more_button from '../../../assets/icons/more.png'
import like_button from '../../../assets/icons/heart-o.png';
import comment_button from '../../../assets/icons/comment-o.png';

const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
  align-items: center;
`;

const Username = styled.div`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: .9em;
  letter-spacing: .3px;
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 8vw;
  height: 8vw;
  margin-right: 3vw;
`;

const UsernameAndPhoto = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4%;
`;

const MoreButton = styled.img`
  height: 2vh;
  margin-right: 4%;
`;

const LikeButton = styled.img`
  height: 3.5vh;
  margin-right: 3vw;
`;

const CommentButton = styled.img`
height: 3.3vh;

`;

const LikeAndComment = styled.div`
  margin: 2vw 3vw;
`;

const NumberOfLikes = styled.div`
  font-family: 'Roboto';
  font-weight: 700;
  margin: 0 3vw;
  font-size: .9em;
  margin-bottm: 2vh;
`;

const BarBelowPhoto = styled.div`
`;

class Card extends Component {
  componentWillMount() {

  }

  renderUserInfo(user) {
    if(user) {
      return (
        <CardTitle>
          <UsernameAndPhoto>
            <UserPhoto src='https://instagram.fcgh15-1.fna.fbcdn.net/t51.2885-19/11906329_960233084022564_1448528159_a.jpg' />
            <Username>{user.username}</Username>
          </UsernameAndPhoto>
          <MoreButton src={more_button}></MoreButton>
        </CardTitle>
      )
    }
    return (
      <CardTitle>
        <UsernameAndPhoto>
          <UserPhoto></UserPhoto>
          <Username>loading user..</Username>
        </UsernameAndPhoto>
        <MoreButton></MoreButton>
      </CardTitle>
    )
  }

  renderPhoto(photo) {
    if(photo) {
      return <div><CardImage alt='' src={photo.img_url} /></div>
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
        <LikeAndComment>
          <LikeButton src={like_button}></LikeButton>
          <CommentButton src={comment_button}></CommentButton>
        </LikeAndComment>
        <NumberOfLikes>15 likes</NumberOfLikes>
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
