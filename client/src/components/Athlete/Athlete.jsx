import React from 'react'
import PropTypes from 'prop-types'

const Athlete = ({ photo, name, rank }) => (
  <div className="athlete">
    <img className="athlete__photo" src={photo} alt={name} loading="lazy" />
    <span className="athlete__name">{name}</span>
    <p className="athlete__rank">{rank}</p>
  </div>
)

Athlete.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
}

export default Athlete
