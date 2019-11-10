import React, { Component } from 'react';
import { Col, Button } from 'antd';
import Cards from './Cards';
import DetailPage from './detailpage';
import Sentence from './Sentence';
import Loading from '../../Components/layout/loading';

class SummaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      displayUserData: false,
      redirect: false,
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
    str += `&name=${
      sessionStorage.getItem('userid') ? sessionStorage.getItem('userid') : 0
    }`;

    fetch(`http://3.15.20.155:5000/calculate` + str)
      .then(res => res.json())
      .then(res =>
        this.setState({
          Data: res,
        }),
      )
      .catch(err =>
        this.setState({
          redirect: true,
        }),
      );
  }

  changeToHand = () => {
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
          <Loading />
        </div>
      );
    } else {
      const { display } = this.state;
      return (
        <div style={{ padding: '20px' }}>
          <br />
          <br />
          <Col span={9} />
          <div id="container">
            <img src={Data.cityphoto} width={'100%'}></img>
          </div>
          <Sentence Data={this.state.Data} />
          <Cards Data={this.state.Data} />
          <Button type="primary" block size="large" onClick={this.changeToHand}>
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
