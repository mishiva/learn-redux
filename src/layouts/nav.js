import React, { Component } from 'react';
import NavLink from '../components/NavLink'
import Menu from 'material-ui/Menu';
import Home from 'material-ui/svg-icons/action/home';
import Done from 'material-ui/svg-icons/action/done';
import Alarm from 'material-ui/svg-icons/action/alarm';
import Accessibility from 'material-ui/svg-icons/action/accessibility';

import './nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <Menu>
        <NavLink to='/' leftIcon={<Home />} onlyActiveOnIndex={true} primaryText='Welcome' />
        <NavLink leftIcon={<Accessibility />} to='/user' primaryText='User' />
        <NavLink leftIcon={<Done />} to='/todo' primaryText='Todo' />
        <NavLink leftIcon={<Alarm />} to='/years' primaryText='Years' />
      </Menu>
    );
  }

}
      // <nav className={this.props.classes}>
      //   <ul className='nav'>
      //     <li><NavLink to='/' onlyActiveOnIndex={true}>Welcome</NavLink></li>
      //     <li><NavLink to='/user'>User</NavLink></li>
      //     <li><NavLink to='/todo'>Todo</NavLink></li>
      //     <li><NavLink to='/years'>Years</NavLink></li>
      //   </ul>
      // </nav>