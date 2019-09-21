import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';


class MovieDetail extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    const { open = false } = props;
    this.state = {
      open,
    };
  }

  toggleOpenState = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.toggleOpenState} center>
          <h2>Simple centered modal</h2>
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
});


export default withStyles(styles)(MovieDetail);
