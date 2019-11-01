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
        (자그레브)로의 여행 예상 예산은 {props.Data.estimate.total}만원 입니다 !
      </span>
    </div>
  );
};
export default Sentence;
