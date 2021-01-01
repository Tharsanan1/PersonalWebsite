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
  root: {
    width: 345,
    height: 345
  },
  media: {
    height: 140,
  },
});

export default function EducationCard(props) {
  const classes = useStyles();

  return (
    <div style={{margin : '10px'}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {props.heading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
