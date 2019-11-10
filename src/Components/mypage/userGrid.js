import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    padding: '5px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <Typography
          variant="overline"
          display="inline-block"
          style={{
            fontSize: '20px',
            marginLeft: '30px',
            color: 'grey',
            height: '40px',
            textAlign: 'center',
          }}
        >
          my buckets
        </Typography>
        {props.data.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.city} />
            <GridListTileBar
              title={tile.city}
              subtitle={<span>₩{tile.price}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
