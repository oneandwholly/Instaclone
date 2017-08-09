import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Card from './Card';

class CardWrapper extends Component {

  componentWillMount() {
    this.props.setCardData(this.props.match.params.photo_id)
  }

  render() {
      return <Card photo_id={this.props.match.params.photo_id} />
  }

}

export default connect(null, actions)(CardWrapper);
