import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Card = ({ period, cost, info, hit }) => (
  <li className={classNames('card', { 'card--hit': hit })}>
    <span className="card__period">{period}</span>
    <span className="card__cost">
      <b>{cost}</b> руб/мес
    </span>
    <span className="card__info">{info}</span>
  </li>
)

Card.propTypes = {
  period: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  info: PropTypes.string,
  hit: PropTypes.bool,
}

Card.defaultProps = {
  info: '',
  hit: false,
}

export default Card
