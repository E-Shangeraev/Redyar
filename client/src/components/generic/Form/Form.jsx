import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children }) => <form className="form">{children}</form>

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default Form
