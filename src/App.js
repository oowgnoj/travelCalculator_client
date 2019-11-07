import React, { Component } from 'react';
import { Button, Cascader, DatePicker, Select, Carousel, Radio } from 'antd';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Typography from '@material-ui/core/Typography';

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
    this.state = {
      cityName: '',
      cityCode: '',
      departureDate: '',
      arrivalDate: '',
      gender: '',
      ageRange: '',
      keyWord: '',

      code: '',
    };
    this.image = [];
    this.image.push(
      <div style={{ textAlign: 'center' }}>
        <img src={word} width={'100%'} height={'100%'} />
      </div>,
    );
  }

  onChangeDate = (date, departureDate, key) => {
    this.setState({
      [key]: departureDate,
    });
  };

  onChangeCity = value => {
    const [cityName, cityCode] = value[2].split('-');
    this.setState({ cityName, cityCode });
  };

  onChangeAge1 = value => {
    this.setState({
      gender: value,
    });
  };

  onChangeAge2 = value => {
    this.setState({
      ageRange: value,
    });
  };

  onChangeKey = value => {
    this.setState({ keyWord: value[1], test: false });
  };

  componenWillMount() {
    this.citys = citys;
    this.keyWords = keyWords;
  }
  render() {
    const { test } = this.state;
    const carouselStyle = {
      height: '400px',
      lineHeight: '160px',
      backgroundColor: 'white',
      overflow: 'hidden',
    };
    const fullStyle = {
      width: '100%',
      marginBottom: '8px',
    };
    const cityStyle = {
      width: '90%',
      marginBottom: '8px',
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
            style={cityStyle}
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

        <Select
          style={halfStyle}
          onChange={this.onChangeAge1}
          size="large"
          placeholder="Please select 성별"
        >
          <Option value="2">남</Option>
          <Option value="1">여</Option>
        </Select>

        <Select
          style={halfStyle}
          onChange={this.onChangeAge2}
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
          style={fullStyle}
          options={keyWords}
          onChange={this.onChangeKey}
          size="large"
          placeholder="Please select 키워드"
        />
        <br />

        <Button
          style={{
            backgroundColor: '#455a64',
            color: 'white',
            fontSize: '17px',
            alignItems: 'center',
            borderColor: '#455a64',
            height: '55px',
          }}
          block
        >
          <Link to={{ pathname: '/summary', state: this.state }}>
            <FlightTakeoffIcon fontSize="Large"></FlightTakeoffIcon>
          </Link>
        </Button>
        <Carousel className="images" style={carouselStyle} autoplay>
          {this.image}
        </Carousel>
      </div>
    );
  }
}
