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
    width: '100vh',
    maxWidth: 500,
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   '"Segoe UI"',
      //        'Roboto',
      '"Helvetica Neue"',
      //   'Arial',
      //   'sans-serif',
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme.typography.overline = {
  fontSize: '10.5em',
  lineHeight: '1.3em',
};
theme.typography.subtitle1 = {
  fontSize: '5em',
};

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Typography variant="overline" style={{ marginLeft: '30px' }}>
          Drive
        </Typography>
        <br />
        <Typography variant="overline" style={{ marginLeft: '30px' }}>
          toward
        </Typography>

        <br />
        <Typography variant="subtitle1" style={{ marginLeft: '30px' }}>
          What matters to you.
        </Typography>
      </MuiThemeProvider>
    </div>
  );
}
