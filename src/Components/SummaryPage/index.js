import React, { Component } from 'react';
import { Col, Icon, Button } from 'antd';
import Cards from './Cards';
import DetailPage from './DetailPage';
import Sentence from './Sentence';
import { Spin } from 'antd';

const FakeData = require('./../../Server');

class SummaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      Data: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        Data: [1],
      });
    }, 2000);
  }
  changeDisplay = () => {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  };

  render() {
    const { Data } = this.state;
    if (Data.length === 0) {
      return (
        <div>
          <Spin size="large" />;
        </div>
      );
    } else {
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
          <Sentence Data={FakeData} />
          <Cards Data={FakeData} />
          <Button
            type="primary"
            block
            size="large"
            onClick={this.changeDisplay}
          >
            Primary
          </Button>
          <div style={{ display: display ? 'block' : 'none' }}>
            <DetailPage style={{ display: 'block' }} Data={FakeData} />
          </div>
        </div>
      );
    }
  }
}
export default SummaryPage;
