import React, { Component } from 'react';
import Nav from './nav'

import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer clearfix'>
        <div className='copyrights pull-left vertical-center'>Copyrights text</div>
        <Nav classes={'pull-left footer-nav'} />
        <ul className='sponsors pull-right vertical-center'>
          <li className='sponsors__item'>Sponsor 1</li>
          <li className='sponsors__item'>Sponsor 2</li>
          <li className='sponsors__item'>Sponsor 3</li>
        </ul>
      </footer>
    );
  }

}