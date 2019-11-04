import React, { Component } from 'react';
import { Cascader, Radio, Select, Button } from 'antd';

import keyW from '../../Assets/menu/key-words';
import city from '../../Assets/images/3.jpeg';
import wordCloud from '../../Assets/images/word-cloud.png';

import './trends.css';
const { Option } = Select;

export default class Trends extends Component {
  state = {
    keyWord: '',
    gender: '',
    ageRange: '',
  };
  onChangeKey = value => {
    this.setState({ keyWord: value[1] });
  };

  onChange1 = e => this.setState({ gender: e.target.value });

  onChangeAge = value => {
    this.setState({
      ageRange: value,
    });
  };

  handleClick = () => {
    console.log(this.state);
  };
  componentWillMount() {
    this.keyWords = keyW;
  }
  render() {
    return (
      <div>
        <Cascader
          style={{ height: 100 }}
          className="full"
          options={this.keyWords}
          onChange={this.onChangeKey}
          placeholder="Please select 키워드"
        />
        <br />
        <Radio.Group
          className="half"
          style={{ height: 100 }}
          onChange={this.onChange1}
          defaultValue="male"
          buttonStyle="solid"
        >
          <Radio.Button className="half" value="1">
            남
          </Radio.Button>
          <Radio.Button className="half" value="2">
            여
          </Radio.Button>
        </Radio.Group>
        <Select
          className="half"
          style={{ height: 100 }}
          onChange={this.onChangeAge}
          placeholder="Please select 연령대"
        >
          <Option value="10">10대</Option>
          <Option value="20">20대</Option>
          <Option value="30">30대</Option>
          <Option value="40">40대</Option>
          <Option value="50">50대</Option>
        </Select>
        <Button
          className="full"
          type="primary"
          style={{ height: 100, fontSize: '50px' }}
          onClick={this.handleClick}
        >
          확인
        </Button>
        <h3 className="full city">도시명</h3>
        <img className="full" src={city}></img>
        <img className="full" src={wordCloud}></img>
      </div>
    );
  }
}
