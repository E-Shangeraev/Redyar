import React from 'react'
import img1 from '../../assets/img/Main/1.jpg'

const Features = () => (
  <section className="features">
    <ul className="features__list">
      <li className="pl pr">
        <img src={img1} alt="новый спротивный зал" />
        <h3 className="subtitle">новый спротивный зал</h3>
        <p>
          <span>Плошадь - 250м2</span>
          <span>Вместимость - 100 чел</span>
        </p>
      </li>
      <li className="pl pr">
        <img src={img1} alt="профессиональное оборудование" />
        <h3 className="subtitle">профессиональное оборудование</h3>
        <p>
          <span>87 тренажеров</span>
          <span>Все необходимые принадлежности</span>
        </p>
      </li>
      <li className="pl pr">
        <img src={img1} alt="квалифицированные тренеры" />
        <h3 className="subtitle">квалифицированные тренеры</h3>
        <p>
          <span>15 тренеров</span>
          <span>11 человек персонал</span>
        </p>
      </li>
    </ul>
  </section>
)

export default Features
