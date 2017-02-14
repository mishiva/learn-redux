import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from './registrationValidation';
import { Promise } from 'es6-promise';
import { renderTextField } from '../../helpers/renderField';
import classNames from 'classnames';
import store from '../../store/configureStore'
import { regRequest } from '../../actions/RegistrationActions';

class RegForm extends Component {

  componentWillReceiveProps(nextProps) {
    !this.props.success && nextProps.success && nextProps.reset();
  }

  render() {
    const { handleSubmit, success, serverMessage } = this.props;
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
          <Field name='first_name' type='text' component={renderTextField} label='First Name'/>
          <br />
          <Field name='last_name' type='text' component={renderTextField} label='Last Name'/>
          <br />
          <Field name='email' type='email' component={renderTextField} label='Email'/>
          <br />
          <Field name='password' type='password' component={renderTextField} label='Password'/>
          <br />
          <div>
            <p className={messageClasses}>{serverMessage}</p>
          </div>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'regForm',
  validate,
  onSubmit: (data) => {
    return new Promise((resolve, reject) => {
      store.dispatch(regRequest(data, resolve, reject))
    });
  }
})(RegForm)
