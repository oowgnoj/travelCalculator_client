import React, { Component } from 'react';
import { Button, Cascader, DatePicker, Select, Carousel, Radio } from 'antd';
import { Link } from 'react-router-dom';
import citys from './Assets/menu/city';
import keyWords from './Assets/menu/key-words';
import ajax from './ajax/ajax';
import SummaryPage from './Components/SummaryPage/index';
const { Option } = Select;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.image = [];
    this.image.push(
      <div style={{ textAlign: 'center' }}>
        <img
          src={require(`./Assets/main/photo-1563311164-4753e106d009.jpeg`)}
          width={'100%'}
          height={'100%'}
        />
      </div>,
    );
    this.state = {
      cityName: '',
      cityCode: '',
      dapartureDate: null,
      arrivalDate: null,
      stop: '',
      gender: '',
      ageRange: '',
      keyWord: '',
      // data: []
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

  handleClick = () => {
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
    const carouselStyle = {
      height: '400px',
      lineHeight: '160px',
      background: './Assets/main/croydeBay.jpeg',
      overflow: 'hidden',
    };
    const fullStyle = {
      width: '100%',
      marginBottom: '8px',
    };
    const halfStyle = {
      width: '50%',
      marginBottom: '8px',
    };
    return (
      <div>
        <Carousel className="images" style={carouselStyle} autoplay>
          {this.image}
        </Carousel>
        <Cascader
          className="wh"
          options={citys}
          onChange={this.onChangeCity}
          size="large"
          style={fullStyle}
          placeholder="Please select city"
        />
        <br />
        <DatePicker
          style={halfStyle}
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'dapartureDate')
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
          <Radio.Button style={halfStyle} value="male">
            남
          </Radio.Button>
          <Radio.Button style={halfStyle} value="female">
            여
          </Radio.Button>
        </Radio.Group>
        <Radio.Group
          onChange={this.onChange2}
          style={halfStyle}
          defaultValue="0"
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button
            style={{
              width: '50%',
              marginBottom: '8px',
            }}
            value="0"
          >
            직항
          </Radio.Button>
          <Radio.Button style={halfStyle} value="1">
            경유
          </Radio.Button>
        </Radio.Group>
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
            height: '50px',
            backgroundColor: '#364d79',
            border: 'none',
            textDecorationColor: '#fff',
            fontSize: '20px',
          }}
          block
          type="ghost"
          onClick={this.handleClick}
        >
          <Link
            to={{ pathname: '/summary', state: this.state }}
            onClick={this.handleClick}
          >
            calculate
          </Link>
        </Button>
      </div>
    );
  }
}
