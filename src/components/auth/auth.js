import React, { Component } from 'react';
import Portal from 'react-portal';
// import { Promise } from 'es6-promise';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/AuthActions';
import BaseModal from '../BaseModal';
import AuthForm from './AuthForm/AuthForm';


class Auth extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth) {
      this.refs.authPortal.closePortal();
    }
  }

  render() {
    const authBtn = <button className='auth-btn'>Authorizaiton</button>
    const { authProceeding, isAuth, user } = this.props.auth;
    return (
      <div>
        {/* Portals */}
        {!isAuth ? (
          <div>
            <Portal ref='authPortal' closeOnEsc openByClickOn={authBtn}>
              <BaseModal modalClassName='auth-modal'>
                <AuthForm
                  onSubmit={::this.handleSubmit}
                  authProceeding={authProceeding}/>
              </BaseModal>
            </Portal>
            <button className='registration-btn' onClick={::this.handleRegistration}>
              Registration
            </button>
          </div>
        ) : (
          <span>{user.first_name} {user.last_name}</span>
        )}
      </div>
    );
  }

  handleRegistration() {
    alert(' Show Registration Modal ');
  }

  handleSubmit(data) {
    const { authRequest } = this.props.authActions
    authRequest(data)
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
