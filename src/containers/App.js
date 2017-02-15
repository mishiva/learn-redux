import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import Header from '../layouts/header'
import Nav from '../layouts/nav'
import Footer from '../layouts/footer'

class App extends Component {

  render() {
    const { isDrawerOpened } = this.props.app
    return (
      <div className={
          classNames({
            'container': true,
            '__opened-drawer': isDrawerOpened
          })
        } >
        <Drawer open={isDrawerOpened} width={240}>
          <h2>React App Menu</h2>
          <Divider />
          <Nav classes='main-nav'/>
        </Drawer>
        
        <section className='main' >
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


function mapStateToProps(state) {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps, null)(App);
