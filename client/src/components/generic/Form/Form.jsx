import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ className, children }) => (
  <form className={`form ${className || ''}`}>{children}</form>
)

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

Form.defaultProps = {
  className: '',
}

export default Form
