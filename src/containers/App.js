import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav'>
          <li><Link to='/' onlyActiveOnIndex={true} activeClassName='active'>Welcome</Link></li>
          <li><Link to='/user' activeClassName='active'>User</Link></li>
          <li><Link to='/todo' activeClassName='active'>Todo</Link></li>
          <li><Link to='/years' activeClassName='active'>Years</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

