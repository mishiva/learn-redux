import patterns from '../../helpers/validationPatterns'

const latinSymbolsWarn = 'Contains non latin symbols!'

const validate = (values) => {
  const errors = {}
  if (values.city && !patterns.latin.test(values.city)) {
    errors.city = latinSymbolsWarn;
  }
  if (!values.street && !patterns.latin.test(values.street)) {
    errors.street = latinSymbolsWarn;
  }
  if (!values.house && !patterns.number.test(values.house)) {
    errors.house = 'Is not a number!'
  }
  return errors
}

export default validate;