import React, { Component } from 'react';
import { Col, Icon, Button } from 'antd';
import Cards from './Cards';
import DetailPage from './DetailPage';
import Sentence from './Sentence';
import { Spin } from 'antd';
// import Loading from '../../Components/Layout/loadingz';
import loading from './../../Assets/images/loading.gif';

const pic = require('./../../Assets/main/current.jpg');
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
    data.code =
      Number(data.gender) + Number(data.ageRange) + Number(data.keyWord) + '';
    delete data.gender;
    delete data.ageRange;
    delete data.keyWord;
    let str = '?';
    for (let key in data) {
      str += key + '=' + data[key] + '&';
    }
    str = str.slice(0, -1);
    console.log(str);
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
          <img src={loading} style={{ width: '100%' }} />
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
          <div id="container">
            <img src={Data.cityphoto} width={'100%'}></img>
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
