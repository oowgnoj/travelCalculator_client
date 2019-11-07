import React, { Component, PropTypes } from 'react';
import handGif from './../../../Assets/images/loading.gif';
import RandomUserData from './randomUserData';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoadingBar from './loadingbar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

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
          <LoadingBar />
        </div>
      );
    }
  }
}
export default Loading;
