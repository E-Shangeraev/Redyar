import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Input = ({ type, label, placeholder, mask }) => {
  const [focus, setFocus] = useState(false)

  const onFocusHandle = () => setFocus(true)
  const onBlurHandle = () => setFocus(false)

  const id = uuidv4()

  return (
    <label
      className={classNames('input', { 'input--focused': focus })}
      htmlFor={id}>
      <span>{label}</span>
      <InputMask mask={mask} onFocus={onFocusHandle} onBlur={onBlurHandle}>
        {() => <input type={type} id={id} placeholder={placeholder} />}
      </InputMask>
    </label>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
}

Input.defaultProps = {
  placeholder: 'Текст',
  mask: '',
}

export default Input
