import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Auth from '../components/auth/auth';
import './header.scss';


export default class Header extends Component {
  render() {
    return (
      <AppBar
        title='React App'
        iconElementRight={<Auth/>}
      />
    );
  }

}