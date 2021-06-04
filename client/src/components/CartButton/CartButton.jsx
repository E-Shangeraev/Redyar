import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CartButton = ({ count }) => (
  <Link to="/cart" className="cart-button">
    {count > 0 && <span className="cart-button__count">{count}</span>}
  </Link>
)

CartButton.propTypes = {
  count: PropTypes.number,
}

CartButton.defaultProps = {
  count: 0,
}

export default CartButton
