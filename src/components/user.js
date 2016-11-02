import React, { Component, PropTypes } from 'react';


export default class User extends Component {

  onFriendsClick() {
    const { getFriends, rows } = this.props
    getFriends(rows)
  }

  render() {
    const { name, surname, age, friends, message, fetching } = this.props.user
    const haveFriends = friends.length > 0
    const firendsList = friends.map((friend, i) =>{
      return <li key={i}>{friend.fname} {friend.lname}</li>
    })
    return (
      <div className='ib user'>
        <p>Привет {name} {surname}</p>
        <p>Age is {age}</p>
        <button onClick={::this.onFriendsClick}>Show my friends</button>
        <div className='wrap'>
          {
          fetching ?
          <p>LOADING...</p>
          :
          haveFriends ?
          <div>
            <p>Your friends are:</p>
            <ul className='friends-list'>{firendsList}</ul>
          </div>
          :
          <p>You don't have friends!</p>
          }
          <p className='error message' style={{color: '#E36049'}}>{message}</p>
        </div>
      </div>
    );
  }

}

User.propTypes = {
  user: React.PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  })
}
