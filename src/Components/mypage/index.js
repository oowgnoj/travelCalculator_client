import React, { Component, PropTypes } from 'react';
import Grid from './userGrid';
import BackgroundPaper from './userCardBackground';
import UserCard from './userCard';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTrip: { a: 'my' },
    };
  }
  componentDidMount() {
    fetch('http://3.15.20.155:5000/mypage').then(res => console.log(res));
  }
  render() {
    return (
      <div>
        {console.log(this.state.myTrip)}
        <BackgroundPaper />
        <Grid />
      </div>
    );
  }
}
export default MyComponent;
