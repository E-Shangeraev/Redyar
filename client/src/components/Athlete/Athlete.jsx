import React from 'react'
import PropTypes from 'prop-types'

const Athlete = ({ photo, name, achievements }) => (
  <div className="athlete">
    <img className="athlete__photo" src={photo} alt={name} />
    <span className="athlete__name">{name}</span>
    <p className="athlete__achievements">{achievements}</p>
  </div>
)

Athlete.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  achievements: PropTypes.string.isRequired,
}

export default Athlete
