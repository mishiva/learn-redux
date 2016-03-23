import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {name, surname, age} = this.props.user
    const {year, photos} = this.props.page
    return (
      <div>
        <p>Привет {name} {surname}</p>
        <p>Age is {age}</p>
        <p>Photos have {photos.length} from {year} year</p>
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
