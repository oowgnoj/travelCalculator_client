import React from 'react';
import Flight from './Flight';
import Hotel from './Hotel';
import Restaurant from './Restaurant';
import { Row, Col } from 'antd';
import airplane from './../../../Assets/icon/airplane.png';

function DetailPage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <Flight />
        <Flight />
        <Flight />
      </div>
      <h2>Hotel</h2>
      <Hotel />
      <h2>Restaurant</h2>
      <Restaurant />
    </div>
  );
}

export default DetailPage;
