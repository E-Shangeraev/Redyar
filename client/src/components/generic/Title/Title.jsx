import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children, className }) => (
  <h2 className={`title ${className}`}>{children}</h2>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Title.defaultProps = {
  className: null,
}

export default Title
