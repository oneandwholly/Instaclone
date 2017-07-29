import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BottomNavigationItem extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.selectNavigationItem(this.props.name);
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

    return (
      <a style={style} onClick={this.handleClick.bind(this)}>{this.props.name}</a>
    );
  }
}

export default connect(null, actions)(BottomNavigationItem);
