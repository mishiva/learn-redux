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
    if (nextProps.isAuth) {
      this.refs.authPortal.closePortal();
    }
  }

  render() {
    const { authProceeding } = this.props.auth;
    console.log(this.props)
    return (
      <div>
        <Portal ref='authPortal' closeOnEsc isOpened={true}>
          <BaseModal modalClassName='auth-modal'>
            <AuthForm
              onSubmit={::this.handleSubmit}
              authProceeding={authProceeding}/>
          </BaseModal>
        </Portal>
      </div>
    );
  }

  handleSubmit(data) {
    const { authRequest } = this.props.authActions;
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


export default connect(mapStateToProps, mapDispatchToProps)(AuthPortal);
