import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, outlined, gray }) => (
  <button
    type="button"
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
}

Button.defaultProps = {
  children: '',
  outlined: false,
  gray: false,
}

export default Button
