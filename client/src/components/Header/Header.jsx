import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__logo" src={logo} alt="Логотип Crossfit Redyar" />
    </Link>
    <div>
      <nav className="header__nav">
        <Link to="/team">Команда</Link>
        <Link to="/competitions">Соревнования</Link>
        <Link to="/beginners">Новичкам</Link>
        <Link to="/price">Стоимость</Link>
      </nav>
      <a className="header__phone" href="tel:+7 (999) 898-99-99">
        +7 (999) 898-99-99
      </a>
      <button className="header__menu-button" type="button">
        Меню
      </button>
    </div>
  </header>
)

export default Header
