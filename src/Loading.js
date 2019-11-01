import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
// import ajax from './ajax/ajax';
class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Spin size="large" />
        </div>
        );
      </div>
    );
  }
}
export default Loading;
