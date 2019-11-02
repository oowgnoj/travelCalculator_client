import React from 'react';

const Sentence = props => {
  return (
    <div
      style={{
        textAlign: 'center',
        height: '100px',
        overflow: 'hidden',
        lineHeight: '130px',
      }}
    >
      <span
        style={{
          fontSize: 'xx-large',
        }}
      >
        6박 7일 Chicago 여행, {props.Data.estimate.total} 대략 만원 입니다 !
      </span>
    </div>
  );
};
export default Sentence;
