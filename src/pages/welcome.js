import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/AuthActions';

import AuthPortal from '../components/auth/authPortal';
import './welcome.scss';


class Welcome extends Component {
  componentWillMount() {
    
  }

  render() {
    const routePath = this.props.route.path
    const { isAuth } = this.props.auth
    return (
      <div>
        <h1>Welcome to react router!</h1>
        <div className='welcome-img'></div>
        {!isAuth && routePath == '/login' && <div><AuthPortal auth={this.props.auth} isOpened={true} /></div>}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);