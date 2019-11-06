import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';
import words from './Data';

class WordCloud extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data) {
      return (
        <div
          style={{
            backgroundColor: '#efefef',
            height: '700px',
            width: '300px',
          }}
        >
          <ReactWordcloud words={this.props.data} />
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: '#efefef',
            height: '700px',
            width: '300px',
          }}
        >
          <ReactWordcloud words={words} />
        </div>
      );
    }
  }
}
export default WordCloud;
