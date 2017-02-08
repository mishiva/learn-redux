import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import validate from './addressValidation';
import renderField from '../../helpers/renderField';
import { getAddress } from '../../actions/UserActions';


class AddressForm extends Component {
 
  componentDidMount() {
    this.props.load(this.props.userId);
  }

  componentWillUnmount() {
    this.props.reset()
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props)
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


const addressform = reduxForm({
  form: 'AddressForm',
  validate,
  enableReinitialize: true
})(AddressForm)

export default connect(
  state => ({
    initialValues: state.address.address
  }),
  { load: getAddress }
)(addressform)