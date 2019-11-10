import { List } from 'antd';
import React from 'react';

const airplaneIcon = require('../../../src/Assets/icon/airplane.png');
const hotelIcon = require('../../../src/Assets/icon/hotel.png');
const menuIcon = require('../../../src/Assets/icon/menu.png');

function Cards(props) {
  var flight = props.Data.details.flight[0];
  var estimate = props.Data.estimate;
  var day = props.Data.day;
  var dayExtended = `${day}박 ${day + 1}일`;

  //flight information
  var getArrival = flight.itineraries[0].segments.length;
  var arrival = flight.itineraries[0].segments[getArrival - 1].arrival.city;

  const listData = [
    {
      title: 'flight',
      description: `인천 국제공항에서 출발하는 최대 100개 왕복 항공권의 평균 가격 입니다.`,
      content: `${arrival}로 가는 항공권의 평균 가격은 ₩${Math.floor(
        estimate.flight,
      )}원 입니다.`,
      image: airplaneIcon,
    },
    {
      title: 'hotel',
      description: '주요 호텔의 객실당 1박 평균 요금 입니다.',
      content: `${arrival}의 1박 평균 요금은  ₩${Math.floor(
        estimate.hotel / 3,
      )}원 입니다. ${dayExtended} 일정의 예상 숙박료는 ₩${
        estimate.hotel
      }원 입니다.`,
      image: hotelIcon,
    },

    {
      title: 'meal',
      description: `NUMBEO 에서 제공하는 restaurant price index를 기반으로 산정한 1일 평균 식비입니다.
        `,
      content: `${arrival}의 하루 식비는 ₩${
        estimate.restaurant
      }원 입니다. ${dayExtended} 일정의 예상 식비는 ₩${estimate.restaurant *
        day}원 입니다.`,
      image: menuIcon,
    },
  ];

  return (
    <div>
      {console.log(props.Data)}
      <span>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={100}
                  height={100}
                  opacity={0.4}
                  alt="logo"
                  src={item.image}
                />
              }
            >
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </span>
    </div>
  );
}

export default Cards;
