import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const FeaturesBlocks = ({ items }) => (
  <ul className="features-blocks">
    {items &&
      items.map((item, index) => (
        <li key={uuidv4()}>
          <span>{`0${index + 1}`}</span>
          <span>{item}</span>
        </li>
      ))}
  </ul>
)

FeaturesBlocks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeaturesBlocks
