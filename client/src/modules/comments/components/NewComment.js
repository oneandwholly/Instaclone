import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addComment({'comment_text': this.state.term, 'photo_id': this.props.photo_id});
      this.setState({ term: "" });
    }
  }

  render() {
    return (
      <input
        style={({ 'width': '99vw ' })}
        onChange={this.onInputChange.bind(this)}
        onKeyPress={this._handleKeyPress.bind(this)}
        value={this.state.term}
        >
      </input>
    );
  }

}

export default connect(null, actions)(NewComment);
