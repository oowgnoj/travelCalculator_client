import React from 'react';
import { Carousel } from 'antd';
import { Bubble } from 'react-chartjs-2';
const request = require('request');
const arr = { x: 1, y: 1, z: 3 };
var img = request('https://api.unsplash.com/search/photos?page=1&query=office');
function chart() {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default chart;
