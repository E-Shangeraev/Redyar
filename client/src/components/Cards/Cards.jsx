import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import Card from '@generic/Card/Card'

const Cards = ({ title, footnote, items, withBackground }) => (
  <section className={classNames('cards', { 'cards--bg': withBackground })}>
    <div className="wrapper">
      <div className="flex space-between align-center mb3">
        <h2 className="title">{title}</h2>
        <p className="cards__footnote">{footnote}</p>
      </div>
      <ul className="cards__list">
        {items.length &&
          items.map(item => (
            <Card
              key={uuidv4()}
              period={item.period}
              cost={item.cost}
              info={item.info}
              hit={item.isHit}
            />
          ))}
      </ul>
    </div>
  </section>
)

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.any,
    ])
  ),
  withBackground: PropTypes.bool,
}

Cards.defaultProps = {
  items: [],
  withBackground: false,
}

export default Cards
