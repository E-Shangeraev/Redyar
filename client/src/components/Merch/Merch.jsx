import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Button from '@generic/Button/Button'

const Merch = ({ img, name, price, sizes }) => {
  const availableSizes = sizes.length ? (
    <ul className="merch__sizes">
      {sizes.map(size => (
        <li key={uuidv4()}>
          <button type="button">{size}</button>
        </li>
      ))}
    </ul>
  ) : (
    ''
  )

  return (
    <div className="merch">
      <img src={img} alt={name} className="merch__photo" />
      <div className="flex column">
        {availableSizes}
        <b>{price} руб</b>
        <span>{name}</span>
        <Button>Купить</Button>
      </div>
    </div>
  )
}

Merch.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.string),
}

Merch.defaultProps = {
  price: 0,
  sizes: [],
}

export default Merch
