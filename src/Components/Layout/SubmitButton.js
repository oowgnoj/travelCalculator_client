import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        style={{ width: '100%' }}
        component={Link}
        to="/summary"
        disabled={true}
      >
        <FlightTakeoffIcon color="blue" />
      </Button>
    </div>
  );
}
