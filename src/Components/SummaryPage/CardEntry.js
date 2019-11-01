import { List } from 'antd';
import React from 'react';

const airplane = require('../../../src/Assets/icon/airplane.png');
const hotel = require('../../../src/Assets/icon/hotel.png');
const menu = require('../../../src/Assets/icon/menu.png');

const listData = [
  {
    title: 'flight',
    description:
      'average price for 60 flights from ICN to LHR. We would recommend you to set a rough guess.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    image: airplane,
  },
  {
    title: 'hotel',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    image: hotel,
  },

  {
    title: 'meal',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    image: menu,
  },
];

function CardEntry() {
  return (
    <div>
      <span>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img width={100} height={100} alt="logo" src={item.image} />
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

export default CardEntry;
