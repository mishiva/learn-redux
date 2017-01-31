import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from './registrationValidation';
import renderField from '../../helpers/renderField';
import classNames from 'classnames';


class RegForm extends Component {

  componentWillReceiveProps(nextProps) {
    !this.props.success && nextProps.success && nextProps.reset();
  }

  componentWillUnmount() {

  }

  render() {
    const { handleSubmit, regProceeding, success, serverMessage } = this.props;
    const messageClasses = classNames({
      'reg-message': true,
      'error': !success,
      'success': success,
      'hidden': !serverMessage.length
    });
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <Field name='first_name' type='text' component={renderField} label='First Name'/>
          <Field name='last_name' type='text' component={renderField} label='Last Name'/>
          <Field name='email' type='email' component={renderField} label='Email'/>
          <Field name='password' type='password' component={renderField} label='Password'/>
          <div>
            <p className={messageClasses}>{serverMessage}</p>
            <button type='submit' disabled={regProceeding}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'regForm',
  validate
})(RegForm)
