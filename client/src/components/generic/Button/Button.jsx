import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, outlined }) => (
  <button
    type="button"
    className={classNames('button', {
      'button--outlined': outlined,
    })}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string,
  outlined: PropTypes.bool,
}

Button.defaultProps = {
  children: '',
  outlined: false,
}

export default Button
