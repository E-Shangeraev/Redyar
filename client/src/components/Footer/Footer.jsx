import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import social1 from '../../assets/icons/vk.png'
import social2 from '../../assets/icons/instagram.png'

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
            <Link to="/">Расписание</Link>
            <Link to="/">Галерея</Link>
            <Link to="/">Заслуги</Link>
            <Link to="/">Команда</Link>
            <Link to="/">Контакты</Link>
            <Link to="/">Новичкам</Link>
            <Link to="/">Лагерь</Link>
            <Link to="/competitions">Соревнования</Link>
          </nav>
          <span className="footer__copyright">
            CrossFit RedYar 2021. Все права защищены.
          </span>
        </div>
        <div className="footer__column">
          <ul className="footer__socials">
            <li>
              <a href="/">
                <img src={social1} alt="vk" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={social2} alt="instagram" />
              </a>
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
