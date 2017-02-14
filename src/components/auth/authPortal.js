import React, { Component } from 'react';
// import Portal from 'react-portal';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { submit } from 'redux-form'

import store from '../../store/configureStore'
// import { authRequest } from '../../actions/AuthActions';
// import BaseModal from '../BaseModal';
import AuthForm from './AuthForm/AuthForm';

const BtnStyle = {
  margin: '0 6px'
}

const bodyStyle = {
  'max-height': '100%'
}


export default class AuthPortal extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   isOpened: props.isOpened || false
    // }
  }

  render() {
    const { authProceeding } = this.props.auth;
    const actions = [
      <RaisedButton
        type='submit'
        label='Submit'
        disabled={authProceeding}
        primary={true}
        onTouchTap={::this.handleSubmit}
        style={BtnStyle}
      />,
      <RaisedButton
        label='Cancel'
        primary={true}
        onTouchTap={::this.handleClose}
        style={BtnStyle}
      />
    ]
    return (
      <Dialog
        onRequestClose={::this.handleClose}
        open={this.props.isOpened}
        actions={actions}
        repositionOnUpdate={false}
        autoDetectWindowHeight={false}
        bodyStyle={bodyStyle}
      >
        <AuthForm
          authProceeding={authProceeding}
        />
      </Dialog>
    );
  }

  handleSubmit() {
    // store.dispatch(authRequest(data));
    store.dispatch(submit('authForm'));
  }

  handleClose() {
    this.props.handleClose()
    const path = this.context.router.location.pathname;
    if (path == '/login') {
      this.context.router.push('/');
    }
  }

}

AuthPortal.contextTypes = {
  router: React.PropTypes.object
}

