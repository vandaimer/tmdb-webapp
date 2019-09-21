import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';
import { compose } from 'redux';
import TablePagination from '@material-ui/core/TablePagination';
import { props, actions } from '../../reducer';


class Pagination extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    getUpcomingMovies: PropTypes.func.isRequired,
    totalResults: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    isSearching: PropTypes.bool.isRequired,
  }

  changePage = async (event, nextPage) => {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies(nextPage+1);
  }

  render() {
    const { totalResults, page, isSearching, classes } = this.props;

    return !isSearching ?  (
      <TablePagination
        classes={ { root: classes.root } }
        component="div"
        onChangePage={this.changePage}
        page={page-1}
        rowsPerPage={20}
        count={totalResults}
        rowsPerPageOptions={[]} />
    ) : (
      <></>
    );
  }
}


const style = () => ({
  root: {
    display: 'flex',
  }
});

export default compose(
  withStyles(style),
  connect(props, actions)
)(Pagination);
