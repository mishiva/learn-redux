import React, { Component } from 'react';
import Auth from '../components/auth/auth';

export default class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
        <div className='logo pull-left vertical-center'>LOGO</div>
        <div className='auth pull-right vertical-center'>
          <Auth/>
        </div>
      </header>
    );
  }

}