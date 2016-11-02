import React, { Component } from 'react';
import Portal from 'react-portal';

import BaseModal from '../BaseModal';
import AuthForm from './AuthForm/AuthForm';


export default class Auth extends Component {
  render() {
    const authBtn = <button className='auth-btn'>Authorizaiton</button>
    return (
      <div>

        {/* Portals */}
        <Portal closeOnEsc openByClickOn={authBtn}>
          <BaseModal modalClassName='auth-modal'>
            <AuthForm onSubmit={::this.handleSubmit}/>
          </BaseModal>
        </Portal>
        <button
          className='registration-btn'
          onClick={::this.handleRegistration}>Registration</button>
      </div>
    );
  }

  handleRegistration() {
    alert(' Show Registration Modal ');
  }

  handleSubmit() {

  }

}