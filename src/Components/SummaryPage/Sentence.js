import React from 'react';

const Sentence = props => {
  var getArrival = props.Data.details.flight[0].itineraries[0].segments.length;
  var departureDate =
    props.Data.details.flight[0].itineraries[0].segments[0].departure.date;
  var arrivalCity =
    props.Data.details.flight[0].itineraries[0].segments[getArrival - 1].arrival
      .city;
  var arrivalDate =
    props.Data.details.flight[0].itineraries[0].segments[getArrival - 1].arrival
      .date;
  arrivalDate = arrivalDate.slice(0, arrivalDate.length - 9);
  departureDate = departureDate.slice(0, departureDate.length - 9);

  var roundedPrice = props.Data.estimate.total.toString();
  roundedPrice = roundedPrice.slice(0, roundedPrice.length - 4);
  roundedPrice = Number(roundedPrice);
  return (
    <div
      style={{
        textAlign: 'center',
        overflow: 'hidden',
        fontSize: '15px',
      }}
    >
      <span
        style={{
          fontSize: '10vw',
          width: '100%',
        }}
      >
        {props.Data.day}박{props.Data.day + 1}일 {arrivalCity} <br />
        여행 경비로는 {roundedPrice}만 원<br />이 예상됩니다.
      </span>
    </div>
  );
};
export default Sentence;
