import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class BaseModal extends Component {

  constructor() {
    super();
    this.handleMouseClickOutside = this.handleMouseClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseClickOutside);
  }

  render() {
    return (
      <div>
        <div className='modal-overlay' />
        <div
          className={`modal ${this.props.modalClassName}`}
          ref='modalContent'>
          <button
            className='modal-close'
            ref='modalClose'
            onClick={this.props.closePortal}>x</button>
          <div className='modal-body' ref='modalBody'>
            {React.cloneElement(this.props.children, {closePortal: this.props.closePortal})}
          </div>
        </div>
      </div>
    );
  }

  handleMouseClickOutside(e) {
    if (isNodeInRoot(e.target, findDOMNode(this.refs.modalContent))) {
      return;
    }
    e.stopPropagation();
    this.props.closePortal();
  }

}

BaseModal.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element
  ]),
  modalClassName: React.PropTypes.string,
  closePortal: React.PropTypes.func
};

function isNodeInRoot(node, root) {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}