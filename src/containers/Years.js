import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Years from '../components/years';
import * as yearsActions from '../actions/YearsActions';

class YearsPage extends Component {
  render() {
    const { years } = this.props
    const { getPhotos } = this.props.yearsActions
    return (
      <div>
        <Years
          photos={years.photos}
          year={years.year}
          getPhotos={getPhotos}
          fetching={years.fetching}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    years: state.years
  }
}

function mapDispatchToProps(dispatch) {
  return {
    yearsActions: bindActionCreators(yearsActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(YearsPage);
