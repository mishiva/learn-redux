import React, { Component } from 'react';
import Portal from 'react-portal';

import BaseModal from '../BaseModal';
import AuthModal from '../modals/AuthModal/AuthModal';


export default class Auth extends Component {
  render() {
    const authBtn = <button className='auth-btn'>Authorizaiton</button>
    return (
      <div>

        {/* Portals */}
        <Portal closeOnEsc openByClickOn={authBtn}>
          <BaseModal modalClassName='auth-modal'>
            <AuthModal/>
          </BaseModal>
        </Portal>
        <button
          className='registration-btn'
          onClick={::this.onRegistrationClick}>Registration</button>
      </div>
    );
  }

  onRegistrationClick() {
    alert(' Show Registration Modal ');
  }

}