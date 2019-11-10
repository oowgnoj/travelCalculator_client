import React, { Component } from 'react';
import { Cascader, DatePicker, Select, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Button from '@material-ui/core/Button';

//component
import MainTypo from './Components/layout/Typography/main';
//options
import citys from './Assets/menu/city';
import keyWords from './Assets/menu/key-words';
//image
import word from './Assets/main/landing_main.jpeg';
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
      recommendation: '',
      auth: false,
    };
    this.image = [];
    this.image.push(
      <div style={{ textAlign: 'center' }}>
        <img src={word} width={'100%'} height={'100%'} />
      </div>,
    );
  }

  //Fetch Random Data
  componentDidMount() {
    fetch(`http://3.15.20.155:5000/loading`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          recommendation: res,
        }),
      )
      .catch(err =>
        this.setState({
          redirect: true,
        }),
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
    this.setState({ keyWord: value[1] });
  };

  componenWillMount() {
    this.citys = citys;
    this.keyWords = keyWords;
  }
  render() {
    const {
      cityName,
      cityCode,
      departureDate,
      arrivalDate,
      gender,
      ageRange,
      keyWord,
    } = this.state;
    let test =
      cityName &&
      cityCode &&
      departureDate &&
      arrivalDate &&
      gender &&
      ageRange &&
      keyWord
        ? false
        : true;

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
      width: '100%',
      marginBottom: '8px',
    };
    const halfStyle = {
      width: '50%',
      height: '10%',
      marginBottom: '8px',
    };
    return (
      <div style={{ padding: '20px' }}>
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
          placeholder="select gender"
        >
          <Option value="2">남</Option>
          <Option value="1">여</Option>
        </Select>

        <Select
          style={halfStyle}
          onChange={this.onChangeAge2}
          size="large"
          placeholder="select age"
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
          placeholder="please select what you like"
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
            width: '100%',
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
