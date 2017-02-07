import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';


class UserList extends Component {
  render() {
    let nodes = this.props.data.map(function(user, index) {
      return (
        <tr key={index}>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
        </tr>
      );
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
            </tr>
            {nodes}
          </tbody>
        </table>
      </div>
    );
  }
}


export default class User extends Component {

  componentDidMount() {
    const { user } = this.props;
    this.lodaUsers(user.data.offset);
  }

  render() {
    const { auth, user, perPage } = this.props
    const { data, message, proceeding } = user;
    const haveUsers = data.rows.length > 0
    const pageCount = Math.ceil(data.count / perPage)
    return (
      <div className='ib user current'>
        <p>Current User: {auth.user.first_name} - {auth.user.last_name} - {auth.user.email}</p>
        <div className='wrap'>
          {
          proceeding ?
          <p>LOADING...</p>
          :
          haveUsers ?
          <div>
            <h3>Awesome Users List</h3>
            <UserList data={data.rows} />
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={<a href=''>...</a>}
              breakClassName={'pagination-break'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={::this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'} />
          </div>
          :
          <p>We don't have users!</p>
          }
          <p className='error message' style={{color: '#E36049'}}>{message}</p>
        </div>
      </div>
    );
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    this.lodaUsers(offset);
  }

  lodaUsers(offset) {
    const { getUsers, perPage } = this.props;
    getUsers(perPage, offset);
  }

}

// User.propTypes = {
//   user: React.PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired
//   })
// }
