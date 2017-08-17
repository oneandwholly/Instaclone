import React, { Component } from 'react';
import Card from './Card';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CardWrapper extends Component {
  componentWillMount() {
    if (!this.props.previouslyFetchedCard) {
      console.log('should fetch card data')
      this.props.fetchCardData(this.props.givenPhotoId);
    }
  }
  render() {
    if (this.props.previouslyFetchedCard) {
      return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Card photo_id={this.props.givenPhotoId} data={this.props.previouslyFetchedCard} />
        </div>
      );
    }
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        loading card data...
      </div>

    )
  }
}

export default withRouter(connect((state, props) => {
  let givenPhotoId = props.match.params.photo_id;
  let previouslyFetchedCard = state.cards.byPhotoId[givenPhotoId];

  return { givenPhotoId, previouslyFetchedCard };
}, actions)(CardWrapper));
