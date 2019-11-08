import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import img from './../../../Assets/images/loading.jpeg';
import Bar from './loadingbar';
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
export default function RandomUserData(props) {
  const classes = useStyles();
  const [data, setData] = useState(props.datas[0]);
  let i = 0;
  useEffect(() => {
    setTimeout(() => {
      i++;
      i = i % 10;
      setData(props.datas[i]);
    }, 3000);
  }, [data]);
  return (
    <div>
      <img
        src={img}
        width={'100%'}
        height={'100%'}
        style={{ display: 'inline' }}
      />
      {console.log(data)}
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
          {data && (
            <div>
              <Typography variant="h5" component="h3">
                {data.city}
              </Typography>
              <Typography component="p">
                `저희 데이터에 따르면 ${data.keyword}에 관심이있는 ${data.age}$
                {data.gender}는 ${data.city} 에 갑니다`
              </Typography>
            </div>
          )}
        </Paper>
        <Bar />
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
