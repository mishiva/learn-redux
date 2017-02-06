import React, { Component } from 'react';
import Portal from 'react-portal';
// import { Promise } from 'es6-promise';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import store from '../../store/configureStore'
import { authRequest } from '../../actions/AuthActions';
import BaseModal from '../BaseModal';
import AuthForm from './AuthForm/AuthForm';

export default class AuthPortal extends Component {

  render() {
    const { authProceeding } = this.props.auth;
    const { isOpened, openByClickOn } = this.props;
    return (
        <Portal
          ref='authPortal' closeOnEsc isOpened={isOpened}
          openByClickOn={openByClickOn}>
          <BaseModal modalClassName='auth-modal' closeModalCallback={::this.handleClosePortal}>
            <AuthForm
              onSubmit={::this.handleSubmit}
              authProceeding={authProceeding}/>
          </BaseModal>
        </Portal>
    );
  }

  handleSubmit(data) {
    store.dispatch(authRequest(data));
  }

  handleClosePortal() {
    const path = this.context.router.location.pathname;
    if (path == '/login') {
      this.context.router.push('/');
    }
  }

}

AuthPortal.contextTypes = {
  router: React.PropTypes.object
}

