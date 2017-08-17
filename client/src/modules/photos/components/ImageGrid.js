import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import cards from '../../cards';

class ImageGrid extends Component {
  handleCellClick(e) {
    e.preventDefault();
  }

  renderCell(photo) {
    const cellStyle = {
      'width': '33.33vw',
      'height': '33.33vw'
    }

    const imgStyle = {
      'width': '100%',
      'height': '100%',
      'display': 'block'
    }

    return (
      <div style={cellStyle} onClick={() => {
          this.props.fetchCardDataBeforeTransitioning(photo, this.props.history)
        }} key={(`${photo.user_id}/${photo.id}`)} >
        <img style={imgStyle} alt='' src={photo.img_url} />
      </div>
    );
  }

  render() {
    const gridStyle = {
      'display': 'flex',
      'flexWrap': 'wrap',
      'flexDirection': 'row'
    }

    if (this.props.photos) {
      return <div style={gridStyle}>{this.props.photos.map(photo => this.renderCell(photo) )}</div>
    }
    return <div>loading photos...</div>
  }
}

export default connect((state, props) => {
  let photos = null;
  if (props.photoIds) {
    photos = props.photoIds.map(photoId => state.photos.byId[photoId])
  }
  return { photos }
}, { fetchCardDataBeforeTransitioning: cards.actions.fetchCardDataBeforeTransitioning })(ImageGrid);
