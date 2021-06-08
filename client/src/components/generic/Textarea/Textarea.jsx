import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Textarea = ({ name, placeholder }) => (
  <textarea
    className="textarea"
    name={name}
    id={uuidv4()}
    placeholder={placeholder}
  />
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  placeholder: '',
}

export default Textarea
