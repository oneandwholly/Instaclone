import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import home_icon  from '../../../assets/icons/home-o.png';
import explore_icon  from '../../../assets/icons/explore-o.png';
import create_icon  from '../../../assets/icons/create-o.png';
import activity_icon  from '../../../assets/icons/like-o.png';
import profile_icon  from '../../../assets/icons/profile-o.png';

import home_icon2  from '../../../assets/icons/home.png';
import explore_icon2  from '../../../assets/icons/explore.png';
import create_icon2  from '../../../assets/icons/create.png';
import activity_icon2  from '../../../assets/icons/like.png';
import profile_icon2  from '../../../assets/icons/profile.png';
//import BottomNavigationItem from './BottomNavigationItem';
import * as actions from '../actions';
import users from '../../users';
import auth from '../../auth';

class BottomNavigation extends Component {
  componentWillMount() {
    //this.props.selectNavigationItem('home');
  }

  renderItem(name, url, icon, activeIcon) {
    let renderIcon = icon;
    const navItemStyle = {
      'float': 'left',
      'display': 'block',
      'color': '#111',
      'textAlign': 'center',
      'paddingTop': '.7em',
      'paddingBottom': '0em',
      'paddingLeft': '0',
      'paddingRight': '0',
      'textDecoration': 'none',
      'width': '20%'
    };
    if (name === this.props.active) {
      renderIcon = activeIcon;
    }
    return <Link to={url} style={navItemStyle}><img src={renderIcon} style={{
        'maxHeight': '3.7vh'
      }} /></Link>
  }

  render() {
    const navStyle = {
      'pointerEvents': 'auto',
      'overflow': 'hidden',
      'backgroundColor': '#fff',
      'position': 'fixed',
      'bottom': '0',
      'width': '100%',
      'zIndex': '222',
      'opacity': '1',
      'height': '6.7vh',
      'borderTop': '1px double #e7e7e7'
    }
    const navItemStyle = {
      'float': 'left',
      'display': 'block',
      'color': '#111',
      'textAlign': 'center',
      'paddingTop': '.7em',
      'paddingBottom': '0em',
      'paddingLeft': '0',
      'paddingRight': '0',
      'textDecoration': 'none',
      'width': '20%'
    };

      return (
        // <nav style={navStyle}>
        //   <BottomNavigationItem name='home' />
        //   <BottomNavigationItem name='explore' />
        //   <BottomNavigationItem name='create' />
        //   <BottomNavigationItem name='activity' />
        //   <BottomNavigationItem name='profile' />
        // </nav>
        <nav style={navStyle}>
            {this.renderItem('home', '/', home_icon, home_icon2 )}
            <Link to='/explore' style={navItemStyle}><img src={explore_icon} style={{
                'maxHeight': '3.7vh'
              }} /></Link>
            {this.renderItem('create', '/create', create_icon, create_icon2 )}
            <Link to='/activity' style={navItemStyle}><img src={activity_icon} style={{
                'maxHeight': '3.7vh'
              }} /></Link>
            {this.renderItem('profile', `/${this.props.authUsername}`, profile_icon, profile_icon2 )}
        </nav>
      );
  }
}
// <Link to='/create' style={navItemStyle}><img src={create_icon} style={{
//     'maxHeight': '3.7vh'
//   }} /></Link>
// <Link to={`/${this.props.authUsername}`} style={navItemStyle}><img src={profile_icon} style={{
//     'maxHeight': '3.7vh'
//   }} /></Link>

export default connect(createSelector(
  auth.selectors.selectUserId,
  users.selectors.selectAllUsers,
  (authUserId, allUsers)=> {
    if (allUsers[authUserId]) {
      return { authUsername: allUsers[authUserId].username }
    }
    return { authUsername: null }
  }
), actions)(BottomNavigation);
