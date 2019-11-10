import React, { Component } from 'react';
import Grid from './userGrid';
import BackgroundPaper from './userCardBackground';

import fakeData from './dataPlacehold';

const alterForm = function(data) {
  var gridListData = [];

  for (let i = 0; i < data.histories.length; i++) {
    let obj = {};
    obj.img = data.histories[i].photo;
    obj.city = data.histories[i].city;
    obj.price = JSON.parse(data.histories[i].estimate).total;
    obj.arrivaldate = data.histories[i].arrivaldate;
    obj.departuredate = data.histories[i].departuredate;
    gridListData.push(obj);
  }
  return gridListData;
};

class myPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTrip: fakeData,
    };
  }
  componentDidMount() {
    fetch('http://3.15.20.155:5000/mypage', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => alterForm(res))
      .then(res =>
        this.setState({
          myTrip: res,
        }),
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <BackgroundPaper />
        <Grid data={this.state.myTrip} />
      </div>
    );
  }
}
export default myPage;
