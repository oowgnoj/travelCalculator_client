import React, { Component, PropTypes } from 'react';
import handGif from './../../../Assets/images/loading.gif';
import RandomUserData from './randomUserData';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    };
  }
  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState(timer => ({ timer: true })),
      3000,
    );
  }
  render() {
    if (!this.state.timer) {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <img src={handGif} style={{ width: '100%' }} />
        </div>
      );
    } else {
      return (
        <div>
          <RandomUserData />
        </div>
      );
    }
  }
}
export default Loading;
