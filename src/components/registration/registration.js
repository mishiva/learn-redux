import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as regActions from '../../actions/RegistrationActions';
import RegForm from './RegistrationForm';

const BtnStyle = {
  margin: '0 6px'
}

const bodyStyle = {
  'maxHeight': '100%'
}

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  render() {
    const registration = this.props.registration;
    const actions = [
      <RaisedButton
        type='submit'
        label='Submit'
        disabled={registration.regProceeding}
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
      <span>
        <Dialog
          onRequestClose={::this.handleClose}
          open={this.state.isOpened}
          actions={actions}
          repositionOnUpdate={false}
          autoDetectWindowHeight={false}
          bodyStyle={bodyStyle}
        >
          <RegForm
            regProceeding={registration.regProceeding}
            success={registration.success}
            serverMessage={registration.serverMessage}
            />
        </Dialog>
        <RaisedButton label='Registration' style={BtnStyle} onClick={::this.handleOpenDialog} />
      </span>
    );
  }
  handleClose() {
    this.setState({isOpened: false})
  }

  handleSubmit() {
    this.props.regActions.submitForm()
  }
  handleOpenDialog() {
    this.setState({isOpened: true})
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
