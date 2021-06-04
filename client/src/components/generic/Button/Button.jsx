/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ type, children, outlined, gray, onClickHandler }) => (
  <button
    type={type}
    onClick={onClickHandler}
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
  onClickHandler: PropTypes.func,
  type: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  outlined: false,
  gray: false,
  onClickHandler: null,
  type: 'button',
}

export default Button
