import handGif from './../../Assets/images/loading.gif';

import React from 'react';

function Loading() {
  return (
    <div>
      <img src={handGif} style={{ width: '100%' }} />
    </div>
  );
}

export default Loading;
