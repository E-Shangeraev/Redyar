import React from 'react'
import PropTypes from 'prop-types'

const Form = React.forwardRef(({ className, children, onSubmit }, ref) => (
  <form className={`form ${className || ''}`} onSubmit={onSubmit} ref={ref}>
    {children}
  </form>
))

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.any,
  ]).isRequired,
}

Form.defaultProps = {
  className: '',
  onSubmit: () => {},
}

export default Form
