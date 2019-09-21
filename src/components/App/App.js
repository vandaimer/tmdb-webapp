import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import MovieList from '../MovieList';
import Pagination from '../Pagination';
import Search from '../Search';

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2">Upcoming Movies</Typography>
      <Search />
      <MovieList />
      <Pagination />
    </div>
  );
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
}


const style = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default withStyles(style)(App);
