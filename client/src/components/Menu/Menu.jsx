import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Menu = ({ isOpened }) => (
  <div
    className={classNames('menu', { 'menu--opened': isOpened })}
    aria-hidden={isOpened ? 'false' : 'true'}
    role="menu">
    <div className="wrapper">
      <h2 className="title">Меню</h2>
      <nav className="menu__nav" role="navigation">
        <ul>
          <li>
            <span>01</span>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <span>02</span>
            <Link to="/">Команда</Link>
          </li>
          <li>
            <span>03</span>
            <Link to="/">Соревнования</Link>
          </li>
          <li>
            <span>04</span>
            <Link to="/">Новичкам</Link>
          </li>
          <li>
            <span>05</span>
            <Link to="/">Стоимость</Link>
          </li>
          <li>
            <span>06</span>
            <Link to="/">Лагерь</Link>
          </li>
          <li>
            <span>07</span>
            <Link to="/">Атлеты</Link>
          </li>
          <li>
            <span>08</span>
            <Link to="/">Блог</Link>
          </li>
        </ul>
      </nav>
    </div>
    <span className="menu__decorate">Меню</span>
  </div>
)

Menu.propTypes = {
  isOpened: PropTypes.bool,
}

Menu.defaultProps = {
  isOpened: false,
}

export default Menu
