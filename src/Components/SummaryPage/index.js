import React, { Component } from 'react';
import { Col, Icon, Button } from 'antd';
import Combine from './Combine';
import DetailPage from './DetailPage';
import Sentence from './Sentence';

class SummaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  changeDisplay = () => {
    const { display } = this.state;

    this.setState({
      display: !display,
    });
    console.log(this.state.display);
  };

  render() {
    const { display } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Col span={9} />
        <Icon
          type="calculator"
          style={{ fontSize: '200px' }}
          theme="outlined"
        />
        <Sentence />
        <Combine />
        <Button type="primary" block size="large" onClick={this.changeDisplay}>
          Primary
        </Button>
        <div style={{ display: display ? 'block' : 'none' }}>
          <DetailPage style={{ display: 'block' }} />
        </div>
      </div>
    );
  }
}
export default SummaryPage;
