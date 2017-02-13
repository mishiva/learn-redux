import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'

import { routes } from '../routes'

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

class Root extends Component {

  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    );
  }
}

Root.propTypes = propTypes;

export default Root;