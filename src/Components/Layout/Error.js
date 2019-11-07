import { Redirect } from 'react-router-dom';

import React, { Component, PropTypes } from 'react';
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.setRedirect}>Redirect</button>
      </div>
    );
  }
}
export default MyComponent;
