import React from 'react';
import { connect } from 'react-redux';
import { Style } from 'radium';
import Snackbar from 'material-ui/Snackbar';
import actions from './actions';
import reset from './reset';


const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications,
  notificationsOpen: state.notifications.open,
});


const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    notifications: React.PropTypes.node,
    notificationsOpen: React.PropTypes.bool,
    close: React.PropTypes.func.isRequired,
    setBackendUrl: React.PropTypes.func.isRequired,
  },

  componentWillMount() {
    // eslint-disable-next-line no-undef
    const hostname = window.location.hostname;
    this.props.setBackendUrl(hostname);
  },

  handleNotificationClose() {
    this.props.close();
  },

  render() {
    return (
      <div>
        <Style rules={reset} />
        {this.props.children}
        <Snackbar
          open={this.props.notificationsOpen}
          message={this.props.notifications}
          autoHideDuration={5000}
          action="close"
          onActionTouchTap={this.handleNotificationClose}
          onRequestClose={this.handleNotificationClose}
        />
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(App);
