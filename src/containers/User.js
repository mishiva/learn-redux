import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/user/user';
import * as userActions from '../actions/UserActions';

class UserPage extends Component {

  render() {
    const { user, auth } = this.props
    const { getUsers, updateAddress, resetAddress } = this.props.userActions
    return (
      <div>
        <User
          user={user}
          auth={auth}
          getUsers={getUsers}
          resetAddress={resetAddress}
          updateAddress={updateAddress}
          perPage={5}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
