import React, { Component } from 'react';
import { Button, Cascader, DatePicker, Select, Carousel, Radio } from 'antd';

import citys from './menu/city';
import keyWords from './menu/key-words';
import ajax from './ajax/ajax';
import './App.css';

const { Option } = Select;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.image = [];
    for (let i = 1; i < 5; i++) {
      this.image.push(
        <div>
          <img src={require(`./images/${i}.jpeg`)} />
        </div>,
      );
    }
    this.state = {
      cityName: '',
      cityCode: '',
      dapartureDate: null,
      arrivalDate: null,
      stop: '',
      gender: '',
      ageRange: '',
      keyWord: '',
      // datas: []
    };
  }

  onChangeAge = value => {
    this.setState({
      ageRange: value,
    });
  };

  onChangeDate = (date, dapartureDate, key) => {
    this.setState({
      [key]: dapartureDate,
    });
  };

  onChangeCity = value => {
    const [cityName, cityCode] = value[2].split('-');
    this.setState({ cityName, cityCode });
  };

  onChangeKey = value => {
    this.setState({ keyWord: value[1] });
  };

  onChange1 = e => this.setState({ gender: e.target.value });

  onChange2 = e => this.setState({ stop: e.target.value });

  handleClicke = () => {
    console.log(this.state);
    //   const { cityName, cityCode, dapartureDate, arrivalDate, stop, gender, ageRange, keyWord} = this.state;
    //   delete this.state[datas];
    //   cityName&&cityCode&&dapartureDate&&arrivalDate&&stop&&gender&&ageRange&&keyWord
    //   ajax(url, this.state)
    //     .then(datas => this.setState({datas}))
    //     .catch(err => console.log(err, '격전확인에러'))
  };

  componenWillMount() {
    this.citys = citys;
    this.keyWords = keyWords;
  }
  render() {
    return (
      <div>
        <Carousel className="images" autoplay>
          {this.image}
        </Carousel>
        ,
        <Cascader
          className="wh"
          options={citys}
          onChange={this.onChangeCity}
          size="large"
          placeholder="Please select city"
        />
        <br />
        <DatePicker
          className="half"
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'dapartureDate')
          }
        />
        <DatePicker
          className="half wh"
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'arrivalDate')
          }
        />
        <Select
          className="wh"
          onChange={this.onChangeAge}
          size="large"
          placeholder="Please select 연령대"
        >
          <Option value="10">10대</Option>
          <Option value="20">20대</Option>
          <Option value="30">30대</Option>
          <Option value="40">40대</Option>
          <Option value="50">50대</Option>
        </Select>
        <Radio.Group
          className="half"
          onChange={this.onChange1}
          defaultValue="male"
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button className="half" value="male">
            남
          </Radio.Button>
          <Radio.Button className="half" value="female">
            여
          </Radio.Button>
        </Radio.Group>
        <Radio.Group
          onChange={this.onChange2}
          className="half wh"
          defaultValue="0"
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button className="half" value="0">
            직항
          </Radio.Button>
          <Radio.Button className="half" value="1">
            경유
          </Radio.Button>
        </Radio.Group>
        <Cascader
          className="wh"
          options={keyWords}
          onChange={this.onChangeKey}
          size="large"
          placeholder="Please select 키워드"
        />
        <br />
        <Button
          style={{ height: '50px' }}
          block
          type="primary"
          onClick={this.handleClicke}
        >
          견&nbsp;&nbsp;적&nbsp;&nbsp;확&nbsp;&nbsp;인
        </Button>
      </div>
    );
  }
}
