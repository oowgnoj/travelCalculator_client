import React from 'react';
import { List, Avatar, Icon } from 'antd';
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function Hotel(props) {
  var hotelName = props.hotel.name;
  var hotelPhoto = props.hotel.photo;
  var hotelPrice = props.hotel.price;
  var hotelRating = props.hotel.rating || '';
  var hotelAddress = props.hotel.address;
  var hotelroom = props.hotel.room;
  const listData = [];
  listData.push({
    title: `${hotelName}`,
    description: `Address : ${hotelAddress}`,
    content: `${hotelName}은 ${hotelRating}성급 호텔 입니다. 해당 날짜의 ${hotelroom} 객실 숙박료는 ₩${hotelPrice} 입니다.`,
  });
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={300} height={200} alt="logo" src={hotelPhoto} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default Hotel;
