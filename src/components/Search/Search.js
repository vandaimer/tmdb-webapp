import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'unistore/react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { props, actions } from '../../reducer';


class Search extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired,
  }

  state = {
    word: '',
  }

  search = () => {
    const { word } = this.state;
    const { search } = this.props;

    search(word);
  }

  changeInput = event => {
    this.setState({ word: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <InputBase
          onKeyDown={event => { if(event.keyCode === 13) this.search(event) }}
          onChange={this.changeInput}
          className={classes.input}
          placeholder="Type and press enter"
          inputProps={{ 'aria-label': 'search upcoming movies' }}
        />
        <IconButton
          onClick={this.search}
          className={classes.iconButton}
          aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 15,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});


export default compose(
  connect(
    props,
    actions
  ),
  withStyles(styles)
)(Search);
