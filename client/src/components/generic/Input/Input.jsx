import React from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'

const Input = ({ type, id, label, placeholder, mask }) => (
  <label className="input" htmlFor={id}>
    <span>{label}</span>
    <InputMask mask={mask}>
      {() => <input type={type} id={id} placeholder={placeholder} />}
    </InputMask>
  </label>
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
}

Input.defaultProps = {
  placeholder: 'Текст',
  mask: '',
}

export default Input
