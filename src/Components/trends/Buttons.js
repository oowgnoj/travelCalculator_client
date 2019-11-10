import React from 'react';
import PersonalButton from './PersonalButton';
import TrendsButton from './TrendsButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Wordcloud from './Wordcloud';

const keywordIndex = [
  'aurora',
  'historical place',
  'good place',
  'culture',
  'massage',
  'beach',
  'hiking',
  'flea market',
  'outlet',
  'shopping',
  'surfing',
  'camping',
  'hotel',
];

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Buttons(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [keyWord, setkeyWord] = React.useState('');
  const [showWordcloud, setShowing] = React.useState('');

  const ChangeGender = event => {
    setGender(Number(event.target.value) || '');
  };
  const ChangeAge = event => {
    setAge(Number(event.target.value) || '');
  };
  const ChangeKeyword = event => {
    setkeyWord(Number(event.target.value) || '');
  };
  const changeCloud = obj => {
    setShowing(obj);
  };

  const fetchInformation = () => {
    var index = Number(keyWord) / 100 - 1;
    var attraction = keywordIndex[index];
    var data = {
      code: Number(keyWord) + Number(age) + Number(gender),
      attraction: attraction,
    };
    let str = '?';
    for (const key in data) {
      str += key + '=' + data[key] + '&';
    }
    str = str.slice(0, -1);
    fetch('http://3.15.20.155:5000/trends' + str)
      .then(res => res.json())
      .then(res => {
        props.controlBackground(res);
        props.controlMessage([gender, age, keyWord]);
      });
  };

  if (showWordcloud === '') {
    return (
      <div>
        <TrendsButton ChangeKeyword={ChangeKeyword} />
        <div style={{ textAlign: 'center' }}>
          <PersonalButton ChangeAge={ChangeAge} ChangeGender={ChangeGender} />
          <Button
            variant="contained"
            className={classes.button}
            onClick={fetchInformation}
          >
            확인
          </Button>
        </div>
      </div>
    );
  } else {
    return <Wordcloud wordcloud={showWordcloud} />;
  }
}
