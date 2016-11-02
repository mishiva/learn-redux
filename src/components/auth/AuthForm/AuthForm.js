import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


import validate from '../authValidation';
import renderField from '../../../helpers/renderField';


class AuthForm extends Component {
  render() {
    const { handleSubmit, authProceeding } = this.props;
    return (
      <div>
        <h1>Authorization</h1>
        <form onSubmit={handleSubmit}>
          <Field name='email' type='email' component={renderField} label='Email'/>
          <Field name='password' type='password' component={renderField} label='Password'/>
          <div>
            <button type='submit' disabled={authProceeding}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}


export default reduxForm({
  form: 'authForm',
  validate
})(AuthForm)
