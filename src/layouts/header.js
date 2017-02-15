import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import store from '../store/configureStore'
import Auth from '../components/auth/auth';
import './header.scss';
import { toggleDrawer } from '../actions/AppActions';


export default class Header extends Component {
  render() {
    return (
      <AppBar
        iconElementRight={<Auth/>}
        onLeftIconButtonTouchTap={::this.toggleDrawer}
      />
    );
  }

  toggleDrawer() {
    store.dispatch(toggleDrawer());
  }
}

