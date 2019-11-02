import React from 'react';
import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function Restaurant(props) {
  var restaurantName = props.restaurant.name;
  var restaurantPhoto = props.restaurant.photo;
  var restaurantCuisines = props.restaurant.cuisines;
  var restaurantPrice = props.restaurant.price;
  var restaurantRating = props.restaurant.rating || '';

  const listData = [];
  listData.push({
    title: `${restaurantName}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: `given days, ${restaurantName} is now offering you as price of $${restaurantPrice}`,
    content: `I'm thinking giving user the rule of rating and the Restaurant rate ${restaurantRating}. ${restaurantCuisines}`,
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

export default Restaurant;
