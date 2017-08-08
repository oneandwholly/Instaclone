import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

class ImageGrid extends Component {
  componentWillMount() {
    console.log('fetch photos')
  }
  componentWillReceiveProps(newProps) {
    console.log('newProps.profilePhotos', newProps.profilePhotos)
  }

  renderCell(photos) {
    const cellStyle = {
      'width': '33.33vw',
      'height': '33.33vw'
    }
    const imgStyle = {
      'width': '100%',
      'height': '100%',
      'display': 'block'
    }
    return photos.map((photo) => {
      return <div style={cellStyle} key={photo.id}><img style={imgStyle} src={photo.img_url} /></div>
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

export default connect()(ImageGrid);
