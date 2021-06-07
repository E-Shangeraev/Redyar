import React from 'react'
import PropTypes from 'prop-types'

const Textarea = ({ name, id, placeholder }) => (
  <textarea
    className="textarea"
    name={name}
    id={id}
    placeholder={placeholder}
  />
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  placeholder: '',
}

export default Textarea
