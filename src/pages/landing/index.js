import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layouts/layout';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


const Landing = React.createClass({
  propTypes: {
    theme: React.PropTypes.object.isRequired,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  handleLogin() {
    this.context.router.push('/login');
  },

  render() {
    return (
      <Layout>
        Landing Page
      </Layout>
    );
  },
});


export default connect(mapStateToProps)(Landing);
