import React, { Component } from 'react';
import Auth from '../components/auth/auth';

import './header.scss';

import reactLogo from '../images/react-logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
        <div className='logo pull-left vertical-center'>
          <img width='auto' height='100%' src={reactLogo} />
        </div>
        <div className='auth pull-right vertical-center'>
          <Auth/>
        </div>
      </header>
    );
  }

}