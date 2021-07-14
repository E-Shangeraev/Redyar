import React from 'react'
import { Link } from 'react-router-dom'
import SocialLink from '@generic/SocialLink/SocialLink'
import logo from './logo.png'

const year = new Date().getFullYear()

const Footer = () => (
  <footer className="footer">
    <div className="wrapper footer__wrapper">
      <div className="flex">
        <div className="footer__column">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Логотип CrossFit Redyar" loading="lazy" />
          </Link>
          <nav className="footer__nav">
            <Link to="/team">Команда</Link>
            <Link to="/competitions">Соревнования</Link>
            <Link to="/beginners">Новичкам</Link>
            <Link to="/price">Стоимость</Link>
            <Link to="/camp">Лагерь</Link>
            <Link to="/awards">Заслуги</Link>
            <Link to="/blog">Блог</Link>
          </nav>
          <span className="footer__copyright">
            CrossFit Redyar {year}. Все права защищены.
          </span>
        </div>
        <div className="footer__column">
          <ul className="footer__socials">
            <li>
              <SocialLink link="https://vk.com/CrossFitredyar" name="vk" />
            </li>
            <li>
              <SocialLink
                link="https://www.instagram.com/CrossFitredyar/"
                name="instagram"
              />
            </li>
            <li>
              <SocialLink
                link="https://www.youtube.com/c/crossfitredyar/featured"
                name="youtube"
              />
            </li>
            <li>
              <SocialLink
                link="https://www.youtube.com/channel/UCVYz1O-TqEYYH6mAX7LofXw"
                name="youtube"
              />
            </li>
          </ul>
          <p className="footer__phone">
            <a href="tel:+7 (391) 232-10-47">+7 (391) 232-10-47</a>
            <span>08:00 - 21:00</span>
          </p>
          <p className="footer__email">
            <span>email</span>
            <a href="mailto:hello@crossfitredyar.ru">hello@crossfitredyar.ru</a>
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
