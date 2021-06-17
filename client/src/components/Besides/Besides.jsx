import React from 'react'
import img1 from '@assets/img/Camp/3.jpg'
import img2 from '@assets/img/Camp/4.jpg'
import img3 from '@assets/img/Camp/5.jpg'
import img4 from '@assets/img/Camp/6.jpg'

const Besides = () => (
  <section className="besides">
    <div className="wrapper">
      <div className="besides__flex">
        <h2 className="title">
          <span>чем заняться</span>
          <span>кроме тренировок</span>
        </h2>
        <p className="besides__text">
          Помимо тренировок в нашем лагере есть различные равлечения и каждый
          человек сможет найти себе развлечение по-душе!
        </p>
      </div>
      <ul className="besides__pastime">
        <li>
          <img
            className="routine__image"
            src={img1}
            alt="походы"
            loading="lazy"
          />
          <b>походы</b>
          <p>
            Походы на гору Чалпан, поездки в заповедник Сундуки и Туимский
            провал
          </p>
        </li>
        <li>
          <img
            className="routine__image"
            src={img2}
            alt="Воллейбол"
            loading="lazy"
          />
          <b>Воллейбол</b>
          <p>Соберите команду из учатсников лагеря и сыграйте в воллейбол</p>
        </li>
        <li>
          <img
            className="routine__image"
            src={img3}
            alt="Вечеринки"
            loading="lazy"
          />
          <b>вечеринки</b>
          <p>Устраиваем вечеринки</p>
        </li>
        <li>
          <img
            className="routine__image"
            src={img4}
            alt="Футбол"
            loading="lazy"
          />
          <b>Футбол</b>
          <p>Сыграйте в футбол с товарищами по лагерю на песчаном поле</p>
        </li>
      </ul>
    </div>
  </section>
)

export default Besides
