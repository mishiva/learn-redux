import React, { Component } from 'react';
import classNames from 'classnames';
import AddressModal from './AddressModal';

class UserItem extends Component {

  constructor(props) {
    super(props)
    this.state = { showEditMenu: false };
  }

  render() {
    const { user, updateAddress, resetAddress } = this.props;
    const editAddressBtn = <li>Edit Address</li>
    return (
      <tr>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <div className='edit-menu-wrap'>
            <button onClick={::this.handleMenuClick}>menu</button>
            <div
              className={classNames({'edit-menu': true, 'visible': this.state.showEditMenu})}>
              <ul>
                <AddressModal
                  isOpened={false}
                  userId={user.id}
                  openByClickOn={editAddressBtn}
                  updateAddress={updateAddress}
                  resetAddress={resetAddress}
                  onOpen={::this.onModalOpen} />
                <li onClick={::this.handleEditUser}>Edit User</li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  toggleEditMenu(toggle) {
    this.setState({showEditMenu: toggle || !this.state.showEditMenu})
  }

  handleMenuClick() {
    this.toggleEditMenu();
  }

  onModalOpen() {
    this.toggleEditMenu(false)
  }

  // handleEditAddress() {
  //   console.log(this.props.user);
  //   this.setState({openAddressModal: true})
  //   this.toggleEditMenu();
  // }

  handleEditUser() {
    console.log(this.props.user);
    this.toggleEditMenu();
  }

}

export default class UserList extends Component {
  render() {
    const nodes = this.props.data.map((user, index) => {
      return <UserItem {...this.props} key={index} user={user} />
    });

    return (
      <div className='user-list'>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit</th>
            </tr>
            {nodes}
          </tbody>
        </table>
      </div>
    );
  }
}