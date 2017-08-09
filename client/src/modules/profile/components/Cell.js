import React, { Component } from 'react';

class Cell extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.handleCellClick(this.props.photo.id);
  }

  render() {
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
      <div style={cellStyle} onClick={this.handleClick.bind(this)} key={this.props.photo.id}><img style={imgStyle} src={this.props.photo.img_url} /></div>
    );
  }
}

export default Cell;


// export default (props) => {
//   const cellStyle = {
//     'width': '33.33vw',
//     'height': '33.33vw'
//   }
//   const imgStyle = {
//     'width': '100%',
//     'height': '100%',
//     'display': 'block'
//   }
//   return <div style={cellStyle} key={props.photo.id}><img style={imgStyle} src={props.photo.img_url} /></div>
// }
