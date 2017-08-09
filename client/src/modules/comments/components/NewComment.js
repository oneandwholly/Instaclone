import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({term});
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addComment({'comment_text': this.state.term, 'photo_id': this.props.photo_id});
    }
  }

  render() {
    return (
      <input
        style={({ 'width': '99vw ' })}
        onChange={event => this.onInputChange(event.target.value)}
        onKeyPress={this._handleKeyPress.bind(this)}
        >
      </input>
    );
  }

}

export default connect(null, actions)(NewComment);
