import React, { Component } from 'react';
import { Col, Icon, Button } from 'antd';
import Cards from './Cards';
import DetailPage from './DetailPage';
import Sentence from './Sentence';
const FakeData = require('./../../Server');

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
  };

  render() {
    const { display } = this.state;
    console.log(this.props);
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
        <Sentence Data={FakeData} />
        <Cards Data={FakeData} />
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
