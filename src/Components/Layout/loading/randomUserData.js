import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import img from './../../../Assets/images/loading.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    minheight: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
  },
}));

export default function RandomUserData() {
  const classes = useStyles();

  return (
    <div>
      <img
        src={img}
        width={'100%'}
        height={'100%'}
        style={{ display: 'inline' }}
      />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh' }}
      >
        <Paper
          className={classes.root}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: '0.8',
            filter: 'alpha(opacity=80)',
          }}
        >
          <Typography variant="h5" component="h3">
            LONDON.
          </Typography>
          <Typography component="p">
            저희 데이터에 따르면 75%의 휴양지에 관심이있는 여행자는 LONDON 에
            갑니다.
          </Typography>
        </Paper>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
