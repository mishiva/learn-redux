import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  render() {
    const {photos, year} = this.props
    return (
      <p>Photos have {photos.length} from {year} year</p>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired
}
