import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ className, children, onSubmit }) => (
  <form className={`form ${className || ''}`} onSubmit={onSubmit}>
    {children}
  </form>
)

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

Form.defaultProps = {
  className: '',
  onSubmit: () => {},
}

export default Form
