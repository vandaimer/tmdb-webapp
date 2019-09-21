import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'unistore/react';
import TablePagination from '@material-ui/core/TablePagination';
import { props, actions } from '../../reducer';


class Pagination extends Component {
  static propTypes = {
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
    const { totalResults, page, isSearching } = this.props;

    return !isSearching ?  (
      <TablePagination
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


export default connect(props, actions)(Pagination);
