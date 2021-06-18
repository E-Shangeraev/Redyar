import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Input = ({ type, value, label, placeholder, mask, changeHandler }) => {
  const [focus, setFocus] = useState(false)

  const onFocusHandle = () => setFocus(true)
  const onBlurHandle = () => setFocus(false)

  const id = uuidv4()

  return (
    <label
      className={classNames('input', { 'input--focused': focus })}
      htmlFor={id}>
      <span>{label}</span>
      {mask ? (
        <InputMask
          mask={mask}
          value={value}
          onChange={changeHandler}
          onFocus={onFocusHandle}
          onBlur={onBlurHandle}>
          {() => (
            <input type={type} name={type} id={id} placeholder={placeholder} />
          )}
        </InputMask>
      ) : (
        <input
          type={type}
          name={type}
          id={id}
          placeholder={placeholder}
          onChange={changeHandler}
          onFocus={onFocusHandle}
          onBlur={onBlurHandle}
        />
      )}
    </label>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Input.defaultProps = {
  placeholder: 'Текст',
  mask: '',
  value: '',
}

export default Input
