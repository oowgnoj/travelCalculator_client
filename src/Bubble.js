import React from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';

import words from './Components/trends/Data';

function App() {
  return (
    <div
      style={{ backgroundColor: '#efefef', height: '300px', width: '700px' }}
    >
      <ReactWordcloud words={words} />
    </div>
  );
}

export default App;
