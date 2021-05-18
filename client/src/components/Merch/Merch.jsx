import React from 'react'
import PropTypes from 'prop-types'
import Button from '../generic/Button/Button'

const Merch = ({ img, name, price }) => (
  <div className="merch">
    <img src={img} alt={name} className="merch__photo" />
    <div className="flex column">
      <ul className="merch__sizes">
        <li>
          <button type="button">M</button>
        </li>
        <li>
          <button type="button">L</button>
        </li>
        <li>
          <button type="button">XL</button>
        </li>
        <li>
          <button type="button">XXL</button>
        </li>
      </ul>
      <b>{price} руб</b>
      <span>{name}</span>
      <Button>Купить</Button>
    </div>
  </div>
)

Merch.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Merch
