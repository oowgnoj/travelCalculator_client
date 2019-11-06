import React from 'react';
import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import { Cascader } from 'antd';
import Wordcloud from './Wordcloud';
import words from './Data';

// 애기사진     'url(https://images.unsplash.com/photo-1548775992-7dbe9ccd4584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80)',
//다른 사진

export default function Trends() {
  const [Background, setBackground] = React.useState(true);
  const controlBackground = () => {
    setBackground(!Background);
  };

  const onBackground = {
    minHeight: '100vh',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1548775992-7dbe9ccd4584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: ' ',
    filter: 'alpha(opacity=30)',
  };

  const onWordCloud = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: ' ',
    filter: 'alpha(opacity=30)',
  };

  if (Background) {
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
            <Buttons controlBackground={controlBackground}></Buttons>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Wordcloud />
      </div>
    );
  }
}
