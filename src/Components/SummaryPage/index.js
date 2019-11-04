import React, { Component } from 'react';
import { Col, Icon, Button } from 'antd';
import Cards from './Cards';
import DetailPage from './DetailPage';
import Sentence from './Sentence';
import { Spin } from 'antd';
const pic = require('./current.jpg');
class SummaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      Data: [],
    };
  }
  componentDidMount() {
    var data = this.props.location.state;
    let str = '?';

    for (let key in data) {
      str += key + '=' + data[key] + '&';
    }
    str = str.slice(0, -1);

    fetch(`http://3.15.20.155:5000/calculate` + str)
      .then(res => res.json())
      .then(res =>
        this.setState({
          Data: res,
        }),
      )
      .catch(err =>
        console.log(
          err,
          `http://3.15.20.155:5000/calculate` + str,
          'error 발생',
        ),
      );
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
          <Spin size="large" />
          live Data searching ....{console.log(this.state.Data)}
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
          {/* <Icon
            type="calculator"
            style={{ fontSize: '200px' }}
            theme="outlined"
          /> */}
          <div id="container">
            <img src={pic} width={'100%'}></img>
          </div>
          <Sentence Data={this.state.Data} />
          <Cards Data={this.state.Data} />
          <Button
            type="primary"
            block
            size="large"
            onClick={this.changeDisplay}
          >
            detail
          </Button>
          <div style={{ display: display ? 'block' : 'none' }}>
            <DetailPage style={{ display: 'block' }} Data={this.state.Data} />
          </div>
        </div>
      );
    }
  }
}
export default SummaryPage;
