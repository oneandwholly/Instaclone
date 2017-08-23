import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  background: #eee;
`;

const Top = styled.div`
  display: flex;
`;

const Middle = styled.div`

`;

const Bottom = styled.div`

`;

const ProfilePhotoWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 20vw;
  height: 20vw;
  max-width: 150px;
  max-height: 150px;
`;

const ProfilePhoto = styled.img`
  height: 100%;
`;

const Username = styled.div`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1.5em;
`;

const FollowButton = styled.button`
`;

const UsernameAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


class UserInfoSection extends Component {
  render() {

    if (this.props.userId) {
      return <Container>
        <Top>
          <ProfilePhotoWrapper>
            <ProfilePhoto src='https://instagram.fcgh15-1.fna.fbcdn.net/t51.2885-19/11906329_960233084022564_1448528159_a.jpg' />
          </ProfilePhotoWrapper>
          <UsernameAndButton>
            <Username>username</Username>
            <FollowButton>Follow</FollowButton>
          </UsernameAndButton>
        </Top>
        <Middle>M</Middle>
        <Bottom>B</Bottom>
      </Container>
    }
    return <div>loading user info...</div>
  }
}

export default connect((state, props) => {
  let user = null;
  if (props.userId) {
    user = state.users.byId[props.userId];
  }
  return { user };
})(UserInfoSection);
