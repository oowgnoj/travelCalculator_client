import React, { Component } from 'react';
import { Button, Cascader, DatePicker, Select, Carousel } from 'antd';

import './App.css';

const { Option } = Select;
// import citys from './menu/city';
// import keyWords from './menu/key-words';

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
    };
  }

  onChange = (value, key) => {
    this.setState({
      [key]: value,
    });
  };

  onChangeDate = (date, dateString, key) => {
    this.setState({
      [key]: dateString,
    });
  };

  onChangeCity = value => {
    const [cityName, cityCode] = value[2].split('-');
    this.setState({ cityName, cityCode });
  };

  onChangeKey = value => {
    this.setState({ keyWord: value[1] });
  };

  handleClicke = () => {
    console.log(this.state);
  };

  // componentWillMount () {
  //   this.citys = citys;
  //   this.keyWords = keyWords;
  // }
  render() {
    const keyWords = [
      {
        value: '관광',
        label: '관광',
        children: [
          {
            value: '오로라',
            label: '오로라',
          },
          {
            value: '유적',
            label: '유적',
          },
          {
            value: '맛집',
            label: '맛집',
          },
          {
            value: '미술관',
            label: '미술관',
          },
        ],
      },
      {
        value: '휴양',
        label: '휴양',
        children: [
          {
            value: '마사지',
            label: '마사지',
          },
          {
            value: '비치',
            label: '비치',
          },
          {
            value: '산림욕',
            label: '산림욕',
          },
        ],
      },
      {
        value: '쇼핑',
        label: '쇼핑',
        children: [
          {
            value: '플리마켓',
            label: '플리마켓',
          },
          {
            value: '아울렛',
            label: '아울렛',
          },
          {
            value: '쇼핑',
            label: '쇼핑',
          },
        ],
      },
      {
        value: '액티비티',
        label: '액티비티',
        children: [
          {
            value: '서핑',
            label: '서핑',
          },
          {
            value: '캠핑',
            label: '캠핑',
          },
          {
            value: '관광',
            label: '관광',
          },
        ],
      },
    ];
    const citys = [
      {
        value: '유럽',
        label: '유럽',
        children: [
          {
            value: '영국',
            label: '영국',
            children: [
              {
                value: 'London-LHR',
                label: '런던',
              },
            ],
          },
          {
            value: '이탈리아',
            label: '이탈리아',
            children: [
              {
                value: 'Rome-FCO',
                label: '로마',
              },
              {
                value: 'Milan-MXP',
                label: '밀라노',
              },
            ],
          },
          {
            value: '아일랜드',
            label: '아일랜드',
            children: [
              {
                value: 'Dublin-DUB',
                label: '더블린',
              },
            ],
          },
          {
            value: '슬로바키아',
            label: '슬로바키아',
            children: [
              {
                value: 'Bratislava-BTS',
                label: '브라티슬라바',
              },
            ],
          },
          {
            value: '포르투갈',
            label: '포르투갈',
            children: [
              {
                value: 'Porto-OPO',
                label: '포르토',
              },
            ],
          },
          {
            value: '폴란드',
            label: '폴란드',
            children: [
              {
                value: 'Warsaw-WMI',
                label: '바르샤바',
              },
            ],
          },
          {
            value: '터키',
            label: '터키',
            children: [
              {
                value: 'Ankara-ESB',
                label: '앙카라',
              },
            ],
          },
        ],
      },
      {
        value: '아시아',
        label: '아시아',
        children: [
          {
            value: '싱가포르',
            label: '싱가포르',
            children: [
              {
                value: 'Singapore-SIN',
                label: '싱가포르',
              },
            ],
          },
          {
            value: '아랍에미리트',
            label: '아랍에미리트',
            children: [
              {
                value: 'Dubai-DXB',
                label: '두바이',
              },
            ],
          },
          {
            value: '말레이시아',
            label: '말레이시아',
            children: [
              {
                value: 'Kuala Lumpur-KUL',
                label: '쿠알라룸푸르',
              },
            ],
          },
        ],
      },
      {
        value: '미주/대양주',
        label: '미주/대양주',
        children: [
          {
            value: '미국',
            label: '미국',
            children: [
              {
                value: 'Washington-IAD',
                label: '워싱톤',
              },
              {
                value: 'Miami-MIA',
                label: '마이애미',
              },
              {
                value: 'Chicago-ORD',
                label: '시카고',
              },
            ],
          },
          {
            value: '호주',
            label: '호주',
            children: [
              {
                value: 'Sydney-SYD',
                label: '시드니',
              },
            ],
          },
        ],
      },
    ];
    return (
      <div>
        <Carousel className="images" autoplay>
          {this.image}
        </Carousel>
        ,
        <Cascader
          className="wh margiTop"
          options={citys}
          onChange={this.onChangeCity}
          size="large"
          placeholder="Please select city"
        />
        <br />
        <DatePicker
          className="wh"
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'dapartureDate')
          }
        />
        <DatePicker
          className="wh"
          onChange={(date, dateString) =>
            this.onChangeDate(date, dateString, 'arrivalDate')
          }
        />
        <Select
          className="wh"
          onChange={select => this.onChange(select, 'stop')}
          size="large"
          placeholder="Please select 환승여부"
        >
          <Option value="0">직항</Option>
          <Option value="1">경유</Option>
        </Select>
        <Select
          className="wh"
          onChange={select => this.onChange(select, 'gender')}
          size="large"
          placeholder="Please select 성별"
        >
          <Option value="male">남</Option>
          <Option value="female">여</Option>
        </Select>
        <Select
          className="wh"
          onChange={select => this.onChange(select, 'ageRange')}
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
          className="wh"
          options={keyWords}
          onChange={this.onChangeKey}
          size="large"
          placeholder="Please select 키워드"
        />
        <br />
        <Button block type="primary" onClick={this.handleClicke}>
          견&nbsp;&nbsp;적&nbsp;&nbsp;확&nbsp;&nbsp;인
        </Button>
      </div>
    );
  }
}
