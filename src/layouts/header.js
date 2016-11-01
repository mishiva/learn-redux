import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
        <div className='logo pull-left vertical-center'>LOGO</div>
        <div className='auth pull-right vertical-center'>
          Auth Block
        </div>
      </header>
    );
  }

}