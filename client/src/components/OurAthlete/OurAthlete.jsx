import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const OurAthlete = ({ photo, name, rank, achievements }) => (
  <div className="our-athlete">
    <div className="flex align-center mb2">
      <img className="our-athlete__photo" src={photo} alt={name} />
      <div>
        <span className="our-athlete__name">{name}</span>
        <p className="our-athlete__rank">{rank}</p>
      </div>
    </div>
    <ul className="our-athlete__achivements">
      {achievements && achievements.map(item => <li key={uuidv4()}>{item}</li>)}
    </ul>
  </div>
)

OurAthlete.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  rank: PropTypes.string.isRequired,
}

export default OurAthlete
