import React, { Component, PropTypes } from 'react';

import ReactWordcloud from 'react-wordcloud';
import words from './Data';

class WordCloud extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // if (this.props.data) {
    return (
      <div>
        <ReactWordcloud words={words} />
      </div>
    );
    // } else {
    //   return (
    //     <div
    //       style={{
    //         height: '400px',
    //         width: '300px',
    //       }}
    //     >
    //       <ReactWordcloud words={words} />
    //     </div>
    //   );
    // }
  }
}
export default WordCloud;
