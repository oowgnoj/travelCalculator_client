import { Descriptions, Row, Col } from 'antd';

import React from 'react';
import airplane from './../../../../src/Assets/icon/airplane.png';

function Flight(props) {
  var getArrival = props.flight.itineraries[0].segments.length;
  var duration = props.flight.itineraries[0].duration;
  var departure = props.flight.itineraries[0].segments[0].daparture.city;
  var departure_date = props.flight.itineraries[0].segments[0].daparture.date;
  var arrival =
    props.flight.itineraries[0].segments[getArrival - 1].arrival.city;
  var layover =
    props.flight.itineraries[0].stop === 0
      ? 'non-stop-flight'
      : `# of layover is ${props.flight.itineraries[0].stop}`;
  var price = props.flight.price;
  return (
    <div style={{ marginBottom: '30px' }}>
      <Row>
        <Col span={4}>
          <img src={airplane} width={100} height={100} />
        </Col>
        <Col span={20}>
          <Descriptions title={props.flight.airline}>
            <Descriptions.Item label="Departure">
              {departure}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="Time">
              {departure_date}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="Arrival">{arrival} </Descriptions.Item>
            <Descriptions.Item label="Duration">{duration} </Descriptions.Item>

            <Descriptions.Item label="layover">{layover} </Descriptions.Item>
            <Descriptions.Item label="Price">{price}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}

export default Flight;
