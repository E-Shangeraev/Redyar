/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Stars = ({ rating }) => {
  const starsFilled = Array(rating).fill(
    <path
      d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z"
      fill="#FF6B00"
    />
  )
  const starsEmpty = Array(5 - rating).fill(
    <path
      d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z"
      fill="#323232"
    />
  )
  const allStars = [...starsFilled, ...starsEmpty]

  return (
    <div>
      {allStars.map(item => (
        <svg
          key={uuidv4()}
          width="20"
          height="20"
          viewBox="0 0
          20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {item}
        </svg>
      ))}
    </div>
  )
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Stars
