import React, { Component } from 'react';
import Portal from 'react-portal';

// import store from '../../store/configureStore'
// import { authRequest } from '../../actions/AuthActions';
import BaseModal from '../BaseModal';
import AddressForm from './AddressForm';

export default class AddressModal extends Component {

  render() {
    const { isOpened, openByClickOn, onOpen } = this.props;
    return (
        <Portal
          ref='addressPortal'
          closeOnEsc
          isOpened={isOpened}
          openByClickOn={openByClickOn}
          onOpen={onOpen}>
          <BaseModal modalClassName='address-modal'>
            <AddressForm onSubmit={::this.handleSubmit} />
          </BaseModal>
        </Portal>
    );
  }

  handleSubmit(data) {
    data.userId = this.props.userId
    console.log(data)
    // store.dispatch(authRequest(data));
  }


}


