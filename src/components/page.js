import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.textContent);
  }

  render() {
    const {photos, year} = this.props
    return (
      <div>
        <p>You have {photos.length} photos from {year} year</p>
        <button onClick={::this.onYearBtnClick}>2016</button>
        <button onClick={::this.onYearBtnClick}>2017</button>
        <button onClick={::this.onYearBtnClick}>2018</button>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}
