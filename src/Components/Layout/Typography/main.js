import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  ThemeProvider,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(','),
  },
});

theme.typography.overline = {
  fontSize: '40px',
  lineHeight: '1.3em',
  leftMargin: '10px',
};

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <div style={{ textalign: 'center' }}>
          <Typography variant="overline" display="block" gutterBottom>
            Everything for travel{' '}
          </Typography>{' '}
          <br />
        </div>
      </MuiThemeProvider>
    </div>
  );
}
