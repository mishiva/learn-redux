import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  onYearBtnClick(e) {
    if(this.props.fetching) return
    this.props.getPhotos(+e.target.textContent);
  }

  render() {
    const {fetching, photos, year} = this.props
    return <div className='ib pag'> 
      <button className='btn' onClick={::this.onYearBtnClick}>2016</button>
      <button className='btn' onClick={::this.onYearBtnClick}>2017</button>
      <button className='btn' onClick={::this.onYearBtnClick}>2018</button>
      <h3>{year} Year</h3>
      {
        fetching ?
        <p> LOADING...</p>
        :
        <p> You have {photos.length} photos!</p>
      }
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}
