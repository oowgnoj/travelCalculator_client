import React from 'react';
import Flight from './Flight';
import Hotel from './Hotel';
import Restaurant from './Restaurant';
import { Divider } from 'antd';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="h6" gutterBottom>
        Flight
      </Typography>{' '}
      <div>
        {flight.map(element => (
          <Flight flight={element} />
        ))}
      </div>
      <Divider />
      <Typography variant="h6" gutterBottom>
        Hotel
      </Typography>
      {hotel.map(element => (
        <Hotel hotel={element} />
      ))}{' '}
      <Divider />
      <br />
      <Typography variant="h6" gutterBottom>
        Restaurant
      </Typography>{' '}
      {restaurant.map(element => (
        <Restaurant restaurant={element} />
      ))}{' '}
      <Divider />
    </div>
  );
}

export default DetailPage;
