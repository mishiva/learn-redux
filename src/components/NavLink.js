import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';

export default class NavLink extends Component {
  render() {
    const { onlyActiveOnIndex, to, primaryText, leftIcon } = this.props
    return <MenuItem
        leftIcon={leftIcon}
        primaryText={primaryText}
        value={to}
        containerElement={<Link onlyActiveOnIndex={onlyActiveOnIndex} to={to}  />}
        activeClassName='active' />
  }
}

