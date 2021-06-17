/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({
  type,
  children,
  outlined,
  gray,
  onClickHandler,
  disabled,
}) => (
  <button
    type={type}
    onClick={onClickHandler}
    disabled={disabled}
    className={classNames('button', {
      'button--outlined': outlined,
      'button--gray': gray,
    })}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string,
  outlined: PropTypes.bool,
  gray: PropTypes.bool,
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func,
  type: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  outlined: false,
  gray: false,
  disabled: false,
  onClickHandler: null,
  type: 'button',
}

export default Button
