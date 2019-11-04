import { Descriptions, Row, Col } from 'antd';
import React from 'react';

function Flight(props) {
  var logo = props.flight.logo.slice(0, props.flight.logo.length - 1);
  var getArrival = props.flight.itineraries[0].segments.length;
  var duration = props.flight.itineraries[0].duration.slice(2);
  var departure = props.flight.itineraries[0].segments[0].departure.city;
  var departure_date = props.flight.itineraries[0].segments[0].departure.date;
  var arrival =
    props.flight.itineraries[0].segments[getArrival - 1].arrival.city;
  var arrival_date =
    props.flight.itineraries[0].segments[getArrival - 1].arrival.date;
  var layover =
    props.flight.itineraries[0].stop === 0
      ? 'non-stop-flight'
      : `# of layover is ${props.flight.itineraries[0].stop}`;
  var price = props.flight.price;
  var airline = props.flight.airline;

  return (
    <div style={{ marginBottom: '30px' }}>
      <Row>
        <Col span={6}>
          <img src={logo} width={170} height={100} />
        </Col>
        <Col span={18}>
          <Descriptions title={airline}>
            <Descriptions.Item label="Departure">
              {departure}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="Time">
              {departure_date.slice(5, departure_date.length - 3)}{' '}
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
