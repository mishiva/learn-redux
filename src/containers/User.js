import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/user';
import * as userActions from '../actions/UserActions';

class UserPage extends Component {
  render() {
    const { user, auth } = this.props
    const { getFriends } = this.props.userActions
    return (
      <div>
        <User
          rows={10}
          user={user}
          auth={auth}
          getFriends={getFriends}
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
