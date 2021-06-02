import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Categories = memo(({ activeCategory, items, onClickCategory }) => (
  <ul className="categories">
    <li>
      <button
        type="button"
        className={classNames('category', {
          active: activeCategory === null,
        })}
        onClick={() => onClickCategory(null)}>
        Все
      </button>
    </li>
    {items &&
      items.map((name, index) => (
        <li key={uuidv4()}>
          <button
            type="button"
            className={classNames('category', {
              active: activeCategory === index + 1,
            })}
            onClick={() => onClickCategory(index + 1)}>
            {name}
          </button>
        </li>
      ))}
  </ul>
))

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories
