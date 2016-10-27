import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/user';
import * as userActions from '../actions/UserActions';

class UserPage extends Component {
  render() {
    const { user } = this.props
    const { getFriends } = this.props.userActions
    return (
      <div>
        <User
          rows={10}
          user={user}
          getFriends={getFriends}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
