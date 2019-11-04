import React from 'react';
import Flight from './Flight';
import Hotel from './Hotel';
import Restaurant from './Restaurant';
import { Divider } from 'antd';

function DetailPage(props) {
  var flight = props.Data.details.flight;
  var hotel = props.Data.details.hotel;
  var restaurant = props.Data.details.restaurant;
  // console.log(props);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Flight</h1>
      <div>
        {flight.map(element => (
          <Flight flight={element} />
        ))}
      </div>
      <Divider />
      <h1 style={{ textAlign: 'center' }}>Hotel</h1>
      {hotel.map(element => (
        <Hotel hotel={element} />
      ))}{' '}
      <Divider />
      <br />
      <h1 style={{ textAlign: 'center' }}>Restaurant</h1>
      {restaurant.map(element => (
        <Restaurant restaurant={element} />
      ))}{' '}
      <Divider />
    </div>
  );
}

export default DetailPage;
