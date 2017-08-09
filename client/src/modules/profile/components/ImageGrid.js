import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Cell from './Cell';

class ImageGrid extends Component {
  componentWillMount() {
  }
  componentWillReceiveProps(newProps) {
  }

  handleCellClick(photo_id) {
    this.props.history.push(`p/${photo_id}`);
  }

  renderCell(photos) {
    return photos.map((photo) => {
      return <Cell key={photo.id} handleCellClick={this.handleCellClick.bind(this)} photo={photo} />
    })
  }


  render() {
    const gridStyle = {
      'display': 'flex',
      'flexWrap': 'wrap',
      'flexDirection': 'row'
    }
    if (this.props.profilePhotos) {
      return(
        <div style={gridStyle}>
          {this.renderCell(this.props.profilePhotos)}
        </div>
      );
    }
    return <div>loading photos...</div>
  }
}

export default withRouter(connect()(ImageGrid));
