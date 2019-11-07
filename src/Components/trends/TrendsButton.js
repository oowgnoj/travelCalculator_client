import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function TrendsButton(props) {
  const classes = useStyles();
  const [keyWord, setKeyWord] = React.useState('');
  const onChange = event => {
    setKeyWord(Number(event.target.value) || '');
    props.ChangeKeyword(event);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">관심사를 선택해주세요.</InputLabel>
        <Select
          defaultValue=""
          input={<Input id="grouped-select" />}
          onChange={onChange}
        >
          <ListSubheader>관광</ListSubheader>
          <MenuItem value={100}>오로라</MenuItem>
          <MenuItem value={200}>유적</MenuItem>
          <MenuItem value={300}>맛집</MenuItem>
          <MenuItem value={400}>문화 예술</MenuItem>

          <ListSubheader>휴양</ListSubheader>
          <MenuItem value={500}>마사지</MenuItem>
          <MenuItem value={600}>Beach</MenuItem>
          <MenuItem value={700}>산림욕</MenuItem>

          <ListSubheader>쇼핑</ListSubheader>
          <MenuItem value={800}>플리마켓</MenuItem>
          <MenuItem value={900}>아울렛</MenuItem>

          <ListSubheader>액티비티</ListSubheader>
          <MenuItem value={1100}>서핑</MenuItem>
          <MenuItem value={1200}>캠핑</MenuItem>
          <MenuItem value={1300}>호캉스</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
