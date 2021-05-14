import React from 'react'
// import './Header.scss'
import logo from './logo.png'

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="Логотип Crossfit Redyar" />
    <div>
      <nav className="header__nav">
        <a href="/">О нас</a>
        <a href="/">Расписание</a>
        <a href="/">Галерея</a>
        <a href="/">Контакты</a>
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
