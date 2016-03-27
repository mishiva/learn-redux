import React, { Component, PropTypes } from 'react';


export default class User extends Component {
  render() {
    const {name, surname, age} = this.props.user
    console.log()
    return (
      <div className='ib user'>
        <p>Привет {name} {surname}</p>
        <p>Age is {age}</p>
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
