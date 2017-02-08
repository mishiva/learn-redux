import React, { Component } from 'react';
import Portal from 'react-portal';
import { pick } from 'lodash';

import BaseModal from '../BaseModal';
import AddressForm from './AddressForm';

export default class AddressModal extends Component {

  render() {
    return (
        <Portal
          {...this.props}
          ref='addressPortal'
          closeOnEsc
          onClose={::this.handlePortalClose} >
          <BaseModal modalClassName='address-modal'>
            <AddressForm onSubmit={::this.handleSubmit} userId={this.props.userId} />
          </BaseModal>
        </Portal>
    );
  }

  handleSubmit(data) {
    console.log(data);
    const userData = pick(data, ['city', 'house', 'street']);
    const { updateAddress, userId } = this.props
    updateAddress(userId, userData)
  }

  handlePortalClose() {
    this.props.resetAddress()
  }

}


