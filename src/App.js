import React, { Component } from 'react';
import { Button, Cascader, DatePicker, Select, Carousel, Radio } from 'antd';
import { Link } from 'react-router-dom';

//component
import MainTypo from './Components/Layout/Typography/main';

//options
import citys from './Assets/menu/city';
import keyWords from './Assets/menu/key-words';

//image
import word from './Assets/main/1.jpeg';

//material

const { Option } = Select;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.image = [];
    this.image.push(
      <div style={{ textAlign: 'center' }}>
        <img src={word} width={'100%'} height={'100%'} />
      </div>,
    );
    this.state = {
      cityName: '',
      cityCode: '',
      departureDate: '',
      arrivalDate: '',
      stop: '0',
      gender: 'male',
      ageRange: '',
      keyWord: '',
      // datas: [],
    };
  }

  onChangeAge = value => {
    this.setState({
      ageRange: value,
    });
  };

  onChangeDate = (date, departureDate, key) => {
    this.setState({
      [key]: departureDate,
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

  componenWillMount() {
    this.citys = citys;
    this.keyWords = keyWords;
  }
  render() {
    const carouselStyle = {
      height: '400px',
      lineHeight: '160px',
      backgroundColor: 'white',
      overflow: 'hidden',
    };
    const fullStyle = {
      width: '90%',
      marginBottom: '8px',
      height: '50px',
    };
    const halfStyle = {
      width: '50%',
      marginBottom: '8px',
    };
    return (
      <div>
        <MainTypo />

        <div style={{ textAlign: 'center' }}>
          <Cascader
            className="wh"
            options={citys}
            onChange={this.onChangeCity}
            size="large"
            style={fullStyle}
            placeholder="Please select city"
          />
        </div>
        <br />
        <DatePicker
          style={halfStyle}
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'departureDate')
          }
        />
        <DatePicker
          style={halfStyle}
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'arrivalDate')
          }
        />

        <Radio.Group
          style={halfStyle}
          onChange={this.onChange1}
          defaultValue="male"
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button
            style={halfStyle}
            style={{ width: '50%', display: 'inline-block' }}
            value="male"
          >
            남
          </Radio.Button>
          <Radio.Button
            style={halfStyle}
            style={{ width: '50%', display: 'inline-block' }}
            value="female"
          >
            여
          </Radio.Button>
        </Radio.Group>
        <Radio.Group
          onChange={this.onChange2}
          style={halfStyle}
          defaultValue="0"
          size="large"
          buttonStyle="solid"
        ></Radio.Group>
        <Select
          style={halfStyle}
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
        <Cascader
          style={halfStyle}
          options={keyWords}
          onChange={this.onChangeKey}
          size="large"
          placeholder="Please select 키워드"
        />
        <br />
        <Button
          style={{
            // height: '600px',
            backgroundColor: '#4a6999',
            border: 'none',
            color: 'white',
            fontSize: '20px',
          }}
          block
          type="ghost"
          onClick={this.handleClick}
        >
          <Link
            to={{ pathname: '/summary', state: this.state }}
            onClick={this.handleClick}
          ></Link>
        </Button>
        <Carousel className="images" style={carouselStyle} autoplay>
          {this.image}
        </Carousel>
      </div>
    );
  }
}
