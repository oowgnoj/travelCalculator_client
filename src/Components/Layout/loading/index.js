import React, { Component } from 'react';
import handGif from './../../../Assets/images/loading.gif';
import RandomUserData from './randomUserData';
import { makeStyles } from '@material-ui/core/styles';
import LoadingBar from './loadingbar';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      datas: [],
    };
  }
  componentDidMount() {
    fetch('http://3.15.20.155:5000/loading')
      .then(res => res.json())
      .then(datas => this.setState({ datas }))
      .catch(err => console.log(err, 'fetch err'));
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
          <RandomUserData datas={this.state.datas} />
          <LoadingBar />
        </div>
      );
    }
  }
}
export default Loading;
