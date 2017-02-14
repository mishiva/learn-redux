import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as authActions from '../../actions/AuthActions';
import Registration from '../registration/Registration';
import AuthPortal from '../../components/auth/authPortal';

const BtnStyle = {
  margin: '5px 12px'
}

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  render() {
    const { isAuth, user } = this.props.auth;
    return (
      <div>
        {/* Portals */}
        {!isAuth ? (
          <div>
            <AuthPortal auth={this.props.auth} isOpened={this.state.isOpened} handleClose={::this.handleClose} />
            <RaisedButton label='Authorizaiton' style={BtnStyle} onClick={::this.handleAuth} />
            <Registration />
          </div>
        ) : (
          <div>
            <span>{user.first_name} {user.last_name}</span>
            <RaisedButton onClick={::this.handleLogout} label='Logout' style={BtnStyle} />
          </div>
        )}
      </div>
    );
  }

  handleAuth() {
    this.setState({isOpened: true})
  }

  handleClose() {
    this.setState({isOpened: false})
  }

  handleLogout() {
    const { logoutRequest } = this.props.authActions
    logoutRequest()
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
