/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const Athlete = ({ photo, name, rank }) => (
  <div className="athlete">
    <div className="athlete__photo">
      <img src={photo} alt={name} loading="lazy" />
    </div>
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
