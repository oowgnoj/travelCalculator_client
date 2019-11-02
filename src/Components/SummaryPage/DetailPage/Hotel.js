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

  const listData = [];
  listData.push({
    title: `${hotelName}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: `given days, ${hotelName} is now offering you as price of $${hotelPrice}`,
    content: `I'm thinking giving user the rule of rating and the Hotel rate ${hotelRating}.`,
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
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
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
