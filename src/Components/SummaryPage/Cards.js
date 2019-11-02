import { List } from 'antd';
import React from 'react';

const airplaneIcon = require('../../../src/Assets/icon/airplane.png');
const hotelIcon = require('../../../src/Assets/icon/hotel.png');
const menuIcon = require('../../../src/Assets/icon/menu.png');

function Cards(props) {
  var flight = props.Data.details.flight[0];
  var hotel = props.Data.details.hotel;
  var restaurant = props.Data.details.restaurant;
  var estimate = props.Data.estimate;

  //flight information
  var getArrival = flight.itineraries[0].segments.length;
  var duration = flight.itineraries[0].duration;
  var departure = flight.itineraries[0].segments[0].departure.city;
  var departure_date = flight.itineraries[0].segments[0].departure.date;
  var arrival = flight.itineraries[0].segments[getArrival - 1].arrival.city;
  var layover =
    flight.itineraries[0].stop === 0
      ? 'non-stop-flight'
      : `# of layover is ${props.flight.itineraries[0].stop}`;
  var price = flight.price;

  // check if props fine

  const listData = [
    {
      title: 'flight',
      description: `average price for 100 flights to destination. We would recommend you to have a rough guess.`,
      content: `Flight ticket to ${arrival} is approximately ${estimate.flight}.`,
      image: airplaneIcon,
    },
    {
      title: 'hotel',
      description:
        'Realtime Hotel price for your destination, offering information only.',
      content: `average one night hotel price of ${arrival} is ${Math.floor(
        estimate.hotel / 3,
      )}. in your case, {we need night here} *${estimate.hotel}`,
      image: hotelIcon,
    },

    {
      title: 'meal',
      description: `we approximate food expenses by using restaurant index form NUMBEO
        `,
      content: `your food expense is about ${estimate.restaurant}. REMEMBER, it doesn not consider special cases. Normal restaurant, bar, coffee`,
      image: menuIcon,
    },
  ];

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

export default Cards;
