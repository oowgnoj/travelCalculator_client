import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MenuIcon from '@material-ui/icons/Menu';

import User from './drawers_user';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key="calculate" component={Link} to="/">
          <ListItemIcon>
            <AirplanemodeActiveIcon fontSize="default" />
          </ListItemIcon>
          <ListItemText primary="calculate" />
        </ListItem>
        <ListItem button key="Trends" component={Link} to="/trends">
          <ListItemIcon>
            <TrendingUpIcon fontSize="default" />
          </ListItemIcon>
          <ListItemText primary="trends" />
        </ListItem>
        <ListItem button key="About" component={Link} to="/about">
          <ListItemIcon>
            <CardTravelIcon fontSize="default" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('top', true)}>
        <MenuIcon />
      </Button>

      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
      >
        <User />
        {sideList('top')}
      </Drawer>
    </div>
  );
}
