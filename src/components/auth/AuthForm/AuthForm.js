import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


import store from '../../../store/configureStore'
import { authRequest } from '../../../actions/AuthActions';
import validate from '../authValidation';
import renderField from '../../../helpers/renderField';


class AuthForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Authorization</h1>
        <form onSubmit={handleSubmit}>
          <Field name='email' type='email' component={renderField} label='Email'/>
          <Field name='password' type='password' component={renderField} label='Password'/>
        </form>
      </div>
    );
  }

}


export default reduxForm({
  form: 'authForm',
  validate,
  onSubmit: (data) => {store.dispatch(authRequest(data))}
})(AuthForm)
