import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Textarea = ({ name, placeholder, changeHandler }) => (
  <textarea
    className="textarea"
    name={name}
    id={uuidv4()}
    placeholder={placeholder}
    onChange={changeHandler}
  />
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
}

Textarea.defaultProps = {
  placeholder: '',
}

export default Textarea
