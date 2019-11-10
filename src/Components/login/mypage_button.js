import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class mypageButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/mypage"
        >
          mypage
        </Button>
      </div>
    );
  }
}
export default mypageButton;
