import React from 'react'
import { Link } from 'react-router-dom'
import SocialLink from '@generic/SocialLink/SocialLink'
import logo from './logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="wrapper footer__wrapper">
      <div className="flex">
        <div className="footer__column">
          <Link to="/">
            <img
              className="footer__logo"
              src={logo}
              alt="Логотип Crossfit Redyar"
            />
          </Link>
          <nav className="footer__nav">
            <Link to="/">О нас</Link>
            <Link to="/price">Расписание</Link>
            <Link to="/">Галерея</Link>
            <Link to="/awards">Заслуги</Link>
            <Link to="/team">Команда</Link>
            <Link to="/">Контакты</Link>
            <Link to="/beginners">Новичкам</Link>
            <Link to="/camp">Лагерь</Link>
            <Link to="/competitions">Соревнования</Link>
          </nav>
          <span className="footer__copyright">
            CrossFit RedYar 2021. Все права защищены.
          </span>
        </div>
        <div className="footer__column">
          <ul className="footer__socials">
            <li>
              <SocialLink link="https://vk.com/crossfitredyar" name="vk" />
            </li>
            <li>
              <SocialLink
                link="https://www.instagram.com/crossfitredyar/"
                name="instagram"
              />
            </li>
          </ul>
          <p className="footer__phone">
            <a href="tel:7 (999) 898-99-99">7 (999) 898-99-99</a>
            <span>08:00 - 21:00</span>
          </p>
          <p className="footer__email">
            <span>email</span>
            <a href="mailto:info@redyar.com">info@redyar.com</a>
          </p>
          <span className="footer__address">
            Красноярск, Белинского 8, ТЦ КОМСОМОЛЛ, 4 эт.
          </span>
          <a href="/" className="footer__policy">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
