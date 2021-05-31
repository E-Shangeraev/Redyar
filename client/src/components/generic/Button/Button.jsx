import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, outlined, gray, onClickHandler }) => (
  <button
    type="button"
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
}

Button.defaultProps = {
  children: '',
  outlined: false,
  gray: false,
  onClickHandler: null,
}

export default Button
