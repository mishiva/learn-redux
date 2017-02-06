import React, { Component } from 'react';
import Portal from 'react-portal';
// import { Promise } from 'es6-promise';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/AuthActions';
import BaseModal from '../BaseModal';
import AuthForm from './AuthForm/AuthForm';

class AuthPortal extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuth) {
      this.refs.authPortal.closePortal();
      const query = this.context.router.location.query;
      let redirectUrl = query && query.redirect ? decodeURIComponent(query.redirect) : '/';
      this.context.router.push(redirectUrl);
    }
  }

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
    const { authRequest } = this.props.authActions;
    authRequest(data)
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


export default connect(mapStateToProps, mapDispatchToProps)(AuthPortal);
