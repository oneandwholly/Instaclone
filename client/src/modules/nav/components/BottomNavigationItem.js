import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { createStructuredSelector } from 'reselect';
import { getActive } from '../selectors';
import { Link } from 'react-router-dom';

class BottomNavigationItem extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.selectCreate();
  }

  render() {
    const style = {
      'float': 'left',
      'display': 'block',
      'color': '#111',
      'textAlign': 'center',
      'paddingTop': '1em',
      'paddingBottom': '1em',
      'paddingLeft': '0',
      'paddingRight': '0',
      'textDecoration': 'none',
      'width': '20%'
    };



    if (this.props.active === this.props.name) {
      return <Link style={style} to='/create'><b>{this.props.name}</b></Link>
    }

    return (
      <Link style={style} to='/create'>{this.props.name}</Link>
    );
  }
}

export default connect(createStructuredSelector({
  active: getActive
}), actions)(BottomNavigationItem);
