import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//import BottomNavigationItem from './BottomNavigationItem';
import * as actions from '../actions';
import users from '../../users';
import auth from '../../auth';

class BottomNavigation extends Component {
  componentWillMount() {
    //this.props.selectNavigationItem('home');
  }

  render() {
    const navStyle = {
      'pointerEvents': 'auto',
      'overflow': 'hidden',
      'backgroundColor': '#eee',
      'position': 'fixed',
      'bottom': '0',
      'width': '100%',
      'zIndex': '222',
      'opacity': '1',
      'height': '6.8vh'
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
            <Link to='/' style={navItemStyle}>Home</Link>
            <Link to='/explore' style={navItemStyle}>Explore</Link>
            <Link to='/create' style={navItemStyle}>Create</Link>
            <Link to='/activity' style={navItemStyle}>Activity</Link>
            <Link to={`/${this.props.authUsername}`} style={navItemStyle}>Profile</Link>
        </nav>
      );
  }
}

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
