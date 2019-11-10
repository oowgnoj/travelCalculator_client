import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import Wordcloud from './Wordcloud';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import keyword from '../../Assets/menu/keyword';

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
  const [message, setMessage] = React.useState([]);
  const classes = useStyles();

  const controlBackground = res => {
    setBackground(res);
  };

  const controlMessage = mes => {
    setMessage(mes);
  };
  const onBackground = {
    minHeight: '100vh',
    maxwidth: '100%',
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
              <Buttons
                controlBackground={controlBackground}
                controlMessage={controlMessage}
              ></Buttons>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={Background.cityphoto}
          style={{ opacity: '0.6', filter: 'alpha(opacity=60)' }}
        ></img>
        <Paper
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            padding: '10px',
            transform: 'translate(-50%, -50%)',
            opacity: '0.8',
            filter: 'alpha(opacity=80)',
            backgroundColor: 'white',
          }}
        >
          <h3>
            {console.log(message)}
            {keyword[message[2]]}에 관심이 있는 {[message[1]]}대
            {keyword[message[0]]}성이 가장 많이 검색한 도시는{' '}
            {keyword[Background.city]}입니다 ! ({[message[3]]})
          </h3>
        </Paper>
        <Wordcloud words={Background} />
      </div>
    );
  }
}
