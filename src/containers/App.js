import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/user';
import Page from '../components/page';
import * as pageActions from '../actions/pageActions';
console.log(pageActions);

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    return (
      <div>
      <User user={user} />
      <Page
        photos={page.photos}
        year={page.year}
        getPhotos={getPhotos}
        fetching={page.fetching}
         />
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

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
