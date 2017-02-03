import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/AuthActions';
import Header from '../layouts/header'
import Nav from '../layouts/nav'
import Footer from '../layouts/footer'
import { getTokenValue } from '../helpers/auth'


class App extends Component {
  componentWillMount() {
    const token = getTokenValue()
    token && this.props.authActions.getUserRequest();
  }

  render() {
    return (
      <div className='container'>
        <Header/>
        <Nav classes='main-nav'/>
        <section className='content'>
          {this.props.children}
        </section>
        <Footer/>
      </div>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(App);