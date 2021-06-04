import React from 'react'
import PropTypes from 'prop-types'

const SocialIcon = ({ name }) => (
  <span className={`social-icon social-icon--${name}`} />
)

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default SocialIcon
