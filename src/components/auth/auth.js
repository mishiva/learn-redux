import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/AuthActions';
import Registration from '../registration/Registration';
import AuthPortal from '../../components/auth/authPortal';

class Auth extends Component {

  render() {
    const authBtn = <button className='auth-btn'>Authorizaiton</button>
    const { isAuth, user } = this.props.auth;
    return (
      <div>
        {/* Portals */}
        {!isAuth ? (
          <div>
            <AuthPortal openByClickOn={authBtn} />
            <Registration />

          </div>
        ) : (
          <div>
            <span>{user.first_name} {user.last_name}</span>
            <button onClick={::this.handleLogout}>Logout</button>
          </div>
        )}
      </div>
    );
  }

  handleLogout() {
    const { logoutRequest } = this.props.authActions
    logoutRequest()
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


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
