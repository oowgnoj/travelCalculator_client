import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  var logo = props.flight.logo.slice(0, props.flight.logo.length - 1);
  var getArrival = props.flight.itineraries[0].segments.length;
  var departure = props.flight.itineraries[0].segments[0].departure.city;
  var departure_date = props.flight.itineraries[0].segments[0].departure.date;
  var arrival =
    props.flight.itineraries[0].segments[getArrival - 1].arrival.city;
  var arrival_date =
    props.flight.itineraries[0].segments[getArrival - 1].arrival.date;
  var layover =
    props.flight.itineraries[0].stop === 0
      ? 'non-stop-flight'
      : `# of layover is ${props.flight.itineraries[0].stop}`;
  var price = props.flight.price;
  var airline = props.flight.airline;

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="airline"
            height="140"
            image={logo}
            witdth="100%"
            title="airline"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {airline}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {departure} - {arrival}
            </Typography>
            <Typography variant="body" color="textSecondary" component="p">
              {departure_date} - {arrival_date}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              ₩{price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
