import React from 'react'
import PropTypes from 'prop-types'
import SocialIcon from '@generic/SocialIcon/SocialIcon'

const SocialLink = ({ link, name }) => (
  <a href={link} className="social" target="_blank" rel="noreferrer">
    <SocialIcon name={name} />
  </a>
)

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SocialLink
