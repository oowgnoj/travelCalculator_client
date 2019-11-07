import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import { Cascader } from 'antd';
import Wordcloud from './Wordcloud';
import Data from './Data';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export default function Trends() {
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

  const [Background, setBackground] = React.useState('');
  const classes = useStyles();

  const controlBackground = res => {
    setBackground(res);
  };

  const onBackground = {
    minHeight: '100vh',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1416339212457-ef9ffadc2903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: ' ',
    filter: 'alpha(opacity=30)',
  };

  if (Background === '') {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={onBackground}
        >
          <Grid>
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
              <Buttons controlBackground={controlBackground}></Buttons>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        {console.log(Background)}
        <Wordcloud words={Background} />
      </div>
    );
  }
}
