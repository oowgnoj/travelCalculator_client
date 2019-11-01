import React from 'react';
import Flight from './Flight';
import Hotel from './Hotel';
import Restaurant from './Restaurant';

function DetailPage() {
  return (
    <div>
      <br />
      <br />
      <br />

      <Flight />
      <Flight />
      <Flight />
      <h2>Hotel</h2>
      <Hotel />
      <h2>Restaurant</h2>
      <Restaurant />
    </div>
  );
}

export default DetailPage;
