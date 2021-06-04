import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, id, label, placeholder }) => (
  <label className="input" htmlFor={id}>
    <span>{label}</span>
    <input type={type} id={id} placeholder={placeholder} />
  </label>
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: 'Текст',
}

export default Input
