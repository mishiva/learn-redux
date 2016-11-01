import React, { Component } from 'react';
import Header from '../layouts/header'
import Nav from '../layouts/nav'
import Footer from '../layouts/footer'

export default class App extends Component {
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

