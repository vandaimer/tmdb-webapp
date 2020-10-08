import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';
import { compose } from 'redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MovieDetail from './MovieDetail';
import { props, actions } from '../../reducer';

class MovieList extends Component {
  state = {
    movie: undefined,
    openModal: false,
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    getUpcomingMovies: PropTypes.func.isRequired,
    movieList: PropTypes.array.isRequired,
    totalResults: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    searchList: PropTypes.array.isRequired,
    isSearching: PropTypes.bool.isRequired,
  };

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  showMovieDetail = movie => {
    this.setState({ movie, openModal: true });
  };

  toggleOpenState = () => {
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  };

  render() {
    const { classes, movieList, searchList, isSearching } = this.props;
    const { openModal: open, movie } = this.state;
    const dataList = isSearching ? searchList : movieList;

    return (
      <List className={classes.root}>
        {open && <MovieDetail open movie={movie} toggleOpenState={this.toggleOpenState} />}
        {Boolean(dataList.length) ? (
          dataList.map((movie, index) => (
            <div key={index}>
              <ListItem onClick={() => this.showMovieDetail(movie)} button alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={movie.backdrop} />
                </ListItemAvatar>
                <ListItemText
                  primary={movie.title}
                  secondary={<React.Fragment>Release - {movie.release_date}</React.Fragment>}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))
        ) : (
          <div>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="We don't have new movies :("
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    ></Typography>
                    {'Try again tomorrow, maybe you can have good news!!'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </div>
        )}
      </List>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 560,
    maxHeight: 600,
    position: 'relative',
    overflow: 'auto',
  },
  inline: {
    display: 'inline',
  },
});

export default compose(
  connect(
    props,
    actions,
  ),
  withStyles(styles),
)(MovieList);
