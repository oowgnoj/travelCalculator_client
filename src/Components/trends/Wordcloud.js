import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { select } from 'd3-selection';

const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'impact',
  fontSizes: [5, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

function getCallback(callback) {
  return function(word, event) {
    const isActive = callback !== 'onWordMouseOut';
    const element = event.target;
    const text = select(element);
    text
      .on('click', () => {
        if (isActive) {
          window.open(`https://google.com/search?q=${word.text}`);
        }
      })
      .transition()
      .attr('background', 'white')
      .attr('font-size', isActive ? '300%' : '100%')
      .attr('text-decoration', isActive ? 'underline' : 'none');
  };
}

const callbacks = {
  getWordColor: word => (word.value > 50 ? 'orange' : 'purple'),
  getWordTooltip: word =>
    `The word "${word.text}" appears ${word.value} times.`,
  onWordClick: getCallback('onWordClick'),
  onWordMouseOut: getCallback('onWordMouseOut'),
  onWordMouseOver: getCallback('onWordMouseOver'),
};

function WordCloud(props) {
  for (let i = 0; i < props.words.spot.length; i++) {
    props.words.spot[i].value = props.words.spot[i].value * 5;
  }
  var totalWords = props.words.word.concat(props.words.spot);
  console.log(totalWords);
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        words={totalWords}
      />
    </div>
  );
}

export default WordCloud;
