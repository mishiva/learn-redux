import React, { Component } from 'react';

import AuthPortal from '../components/auth/authPortal';


export default class Welcome extends Component {
  componentWillMount() {
    
  }

  render() {
    const routePath = this.props.route.path
    return (
      <div>
        <h1>Welcome to react router!</h1>
        {routePath == '/login' && <div><AuthPortal isOpened={true} /></div>}
      </div>
    );
  }

}