import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/user';
import Page from '../components/page';

class App extends Component {
  render() {
    const { user, page } = this.props
    console.log(user);
    return (
      <div>
      <User user={user} />
      <Page photos={page.photos} year={page.year} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
