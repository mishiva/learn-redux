import React, { Component } from 'react';
import Portal from 'react-portal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Promise } from 'es6-promise';

import * as regActions from '../../actions/RegistrationActions';
import BaseModal from '../BaseModal';
import RegForm from './RegistrationForm';


class Registration extends Component {

  render() {
    const regBtn = <button className='reg-btn'>Registration</button>
    const registration = this.props.registration;
    return (
      <Portal ref='regPortal' closeOnEsc openByClickOn={regBtn}>
        <BaseModal modalClassName='reg-modal'>
          <RegForm
            onSubmit={::this.handleSubmit}
            regProceeding={registration.regProceeding}
            success={registration.success}
            serverMessage={registration.serverMessage}
            />
        </BaseModal>
      </Portal>
    );
  }

  handleSubmit(data) {
    const { regRequest } = this.props.regActions
    return new Promise((resolve, reject) => {
      regRequest(data, resolve, reject)
    });
  }
}


function mapStateToProps(state) {
  return {
    registration: state.registration
  }
}

function mapDispatchToProps(dispatch) {
  return {
    regActions: bindActionCreators(regActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Registration);
