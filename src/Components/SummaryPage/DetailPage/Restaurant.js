import React from 'react';
import { List, Avatar, Icon } from 'antd';

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
    description: `signiture cuision : ${restaurantCuisines}`,
    content: `${restaurantName}의 2인 평균 비용은 ${restaurantPrice} 입니다. 'zomato'의 ${restaurantName} 평점은 ${restaurantRating}/5 입니다.`,
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
              <img width={272} height={200} alt="logo" src={restaurantPhoto} />
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
