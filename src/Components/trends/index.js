import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import { Cascader } from 'antd';

export default function Trends() {
  // const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: '100vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: ' ',
          filter: ' alpha(opacity=30)',
        }}
      >
        <Grid>
          <Buttons></Buttons>
        </Grid>
      </Grid>
    </div>
  );
}
