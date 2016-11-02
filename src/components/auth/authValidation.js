import patterns from '../../helpers/validationPatterns'


const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!patterns.email.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password || !values.password.trim()) {
    errors.password = 'Password is required'
  }
  return errors
}

export default validate;