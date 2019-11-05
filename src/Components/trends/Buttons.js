import React, { Component, PropTypes } from 'react';
import PersonalButton from './PersonalButton';
import TrendsButton from './TrendsButton';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const keywordIndex = [
  'aurora',
  'historic',
  'restaurant',
  'culture',
  'massage',
  'beach',
  'hiking',
  'fleemarket',
  'outlet',
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

export default function Buttons() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [keyWord, setkeyWord] = React.useState('');

  //react hooks

  const ChangeGender = event => {
    setGender(Number(event.target.value) || '');
  };
  const ChangeAge = event => {
    setAge(Number(event) || '');
  };
  const ChangeKeyword = event => {
    setkeyWord(Number(event.target.value) || '');
  };

  const fetchInformation = () => {
    var index = Number(keyWord) / 100 - 1;
    var attraction = keywordIndex[index];
    var data = {
      code: Number(keyWord) + Number(age) + Number(gender),
      attraction: attraction,
    };
    // console.log(keyWord, age, gender);
    // console.log(keywordIndex[index]);
    let str = '?';
    for (const key in data) {
      str += key + '=' + data[key] + '&';
    }
    str = str.slice(0, -1);
    fetch('http://3.15.20.155:5000/trends' + str)
      .then(res => res.json())
      .then(res => console.log(res));
  };

  return (
    <div>
      {console.log(keyWord, age, gender)}
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
}
