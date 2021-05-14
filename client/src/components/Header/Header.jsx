import React from 'react'
import './Header.scss'
import logo from './logo.png'

const Header = () => (
  <header>
    <img src={logo} alt="Логотип Crossfit Redyar" />
    <nav>
      <a href="/">О нас</a>
      <a href="/">Расписание</a>
      <a href="/">Галерея</a>
      <a href="/">Контакты</a>
      <a href="tel:+7 (999) 898-99-99">+7 (999) 898-99-99</a>
    </nav>
    <button type="button">Меню</button>
  </header>
)

export default Header
