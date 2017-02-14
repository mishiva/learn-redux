import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import Header from '../layouts/header'
import Nav from '../layouts/nav'
import Footer from '../layouts/footer'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <Drawer open={true} width={240}>
          <h2>React App Menu</h2>
          <Divider />
          <Nav classes='main-nav'/>
        </Drawer>
        
        <section className='main'>
          <Header/>
          <section className='content'>
            {this.props.children}
          </section>
          <Footer/>
        </section>
      </div>
    );
  }
}