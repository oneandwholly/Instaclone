import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAuthenticated } from '../selectors';
import Signup from './Signup';

class IndexRoute extends Component {
  constructor(props) {
    super(props);

    this.state = { displaySignup: true };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  componentWillMount() {
    console.log('IndexRoute this.props',this.props)
  }

  componentWillReceiveProps(newProps) {
    console.log('IndexRoute NewProps',newProps)
  }

  toggleDisplay() {
    this.setState({ displaySignup: !this.state.displaySignup });
  }

  render() {
    if(this.state.displaySignup) {
      return (
        <Signup />
      );
    } else {
      return (
        <div>Login</div>
      );
    }
  }
}


// Exporting named, unconnected component for testing purposes.
export { IndexRoute };

// The default export is the connected component.
export default connect()(IndexRoute);
