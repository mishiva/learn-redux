import React, { Component } from 'react';
import NavLink from '../components/NavLink'

export default class Nav extends Component {
  render() {
    return (
      <nav className={this.props.classes}>
        <ul className='nav'>
          <li><NavLink to='/' onlyActiveOnIndex={true}>Welcome</NavLink></li>
          <li><NavLink to='/user'>User</NavLink></li>
          <li><NavLink to='/todo'>Todo</NavLink></li>
          <li><NavLink to='/years'>Years</NavLink></li>
        </ul>
      </nav>
    );
  }

}