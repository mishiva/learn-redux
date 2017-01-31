import patterns from '../../helpers/validationPatterns'


const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!patterns.email.test(values.email)) {
    errors.email = 'Invalid email address!'
  }
  if (!values.password || !values.password.trim()) {
    errors.password = 'Password is required!'
  }
  if (!values.first_name || !values.first_name.trim()) {
    errors.first_name = 'First Name is required!'
  }
  if (!!values.first_name && values.first_name.length < 2) {
    const error = 'First Name length must be more than 2!'
    errors.first_name = error;
  }
  if (!values.last_name || !values.last_name.trim()) {
    errors.last_name = 'Last Name is required!'
  }
  if (!!values.last_name && values.last_name.length < 2) {
    const error = 'Last Name length must be more than 2!'
    errors.last_name = error;
  }
  return errors
}

export default validate;