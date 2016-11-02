import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className='form-item'>
    <label className='form-label'>{label}</label>
    <div className='form-input'>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <div className='form-error'>{error}</div>) || (warning && <span className='form-error'>{warning}</span>))}
    </div>
  </div>
)


export default renderField;