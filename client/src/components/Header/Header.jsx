import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Menu from '@components/Menu/Menu'
import logo from './logo.png'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const btnMenuClickHandler = () => setToggleMenu(!toggleMenu)

  useEffect(() => {
    document.body.style.overflow = toggleMenu ? 'hidden' : ''
  }, [toggleMenu])

  useEffect(() => {
    document.body.addEventListener('keydown', e =>
      e.keyCode === 27 ? setToggleMenu(false) : null
    )
  }, [])

  return (
    <header className="header">
      <div
        className={classNames('header__container', {
          'header__container--dark': toggleMenu,
        })}>
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип CrossFit Redyar" />
        </Link>
        <div>
          <nav className="header__nav" role="navigation">
            <Link to="/team">Команда</Link>
            <Link to="/competitions">Соревнования</Link>
            <Link to="/beginners">Новичкам</Link>
            <Link to="/price">Стоимость</Link>
          </nav>
          <a className="header__phone" href="tel:+7 (391) 232-10-47">
            +7 (391) 232-10-47
          </a>
          <button
            className="header__menu-button"
            type="button"
            aria-haspopup="true"
            onClick={btnMenuClickHandler}>
            {toggleMenu ? 'Закрыть' : 'Меню'}
          </button>
        </div>
      </div>
      <Menu isOpened={toggleMenu} />
    </header>
  )
}

export default Header
