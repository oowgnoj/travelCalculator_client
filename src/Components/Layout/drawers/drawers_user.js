import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FaceIcon from '@material-ui/icons/Face';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import LogoutButton from './../../login/logout';
import MypageButton from './../../login/mypage_button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  button: {
    margin: theme.spacing(1),
    width: '100px',
  },
}));

export default function UserInfo() {
  const classes = useStyles();
  var userId = sessionStorage.getItem('userid');

  if (!userId) {
    return (
      <Paper>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <PersonOutlineIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary="Travel Calculator의 회원이 되시겠어요?"
              secondary={
                <React.Fragment>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={Link}
                    to="/login"
                  >
                    login
                  </Button>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>
    );
  } else {
    return (
      <Paper>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FaceIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary={'welcome ' + userId}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  Like all great travelers,
                </React.Fragment>
              }
            />
            <MypageButton />
            <Grid sm={1} />
            <LogoutButton />
          </ListItem>

          <Divider variant="inset" component="li" />
        </List>
      </Paper>
    );
  }
}
