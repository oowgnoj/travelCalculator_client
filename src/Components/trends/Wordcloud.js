import React from 'react';
import ReactWordcloud from 'react-wordcloud';

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

function WordCloud(props) {
  const data = props.data;

  return (
    <div>
      {console.log(data)}
      <h1>안녕</h1>
    </div>
  );
}

export default WordCloud;

// class WordCloud extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props.data);
//     return (
//       <div>
//         <ReactWordcloud options={options} words={this.props.data.spot} />
//         <ReactWordcloud options={options} words={this.props.data.word} />
//       </div>
//     );
//   }
// }
// export default WordCloud;
