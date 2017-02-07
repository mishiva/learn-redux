import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


import validate from './addressValidation';
import renderField from '../../helpers/renderField';


class AddressForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Address</h1>
        <form onSubmit={handleSubmit}>
          <Field name='city' type='text' component={renderField} label='City'/>
          <Field name='street' type='text' component={renderField} label='Street'/>
          <Field name='house' type='number' component={renderField} label='House'/>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}


export default reduxForm({
  form: 'AddressForm',
  validate
})(AddressForm)
