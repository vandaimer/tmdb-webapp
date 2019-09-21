import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';



class MovieDetail extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    toggleOpenState: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
  }

  render() {
    const { classes, movie, open, toggleOpenState } = this.props;
    return (
      <div>
        <Modal open={open} onClose={toggleOpenState} center>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movie.poster}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="h4">
                  Release {movie.release_date}
                </Typography>
              </CardContent>
            </CardActionArea>
            <List component="nav" className={classes.root} aria-label="genres">
              {Boolean(movie.genres.length) && movie.genres.map(genre => (
                <ListItem button>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={genre} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Modal>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 560,
  },
  inline: {
    display: 'inline',
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 281,
    width: 500,
  },
});


export default withStyles(styles)(MovieDetail);
