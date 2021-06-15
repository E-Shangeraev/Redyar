import React from 'react'
import imageJpg1 from '@assets/img/Main/Features/1.jpg'
import imageWebp1 from '@assets/img/Main/Features/1.webp'
import imageJpg2 from '@assets/img/Main/Features/2.jpg'
import imageWebp2 from '@assets/img/Main/Features/2.webp'
import imageJpg3 from '@assets/img/Main/Features/3.jpg'
import imageWebp3 from '@assets/img/Main/Features/3.webp'

const Features = () => (
  <section className="features">
    <ul className="features__list">
      <li className="pl pr">
        <picture className="about__image">
          <source srcSet={imageWebp1} type="image/webp" />
          <img src={imageJpg1} alt="новый спротивный зал" loading="lazy" />
        </picture>
        <h3 className="subtitle">новый спротивный зал</h3>
        <p>
          <span>Плошадь - 250м2</span>
          <span>Вместимость - 100 чел</span>
        </p>
      </li>
      <li className="pl pr">
        <picture className="about__image">
          <source srcSet={imageWebp2} type="image/webp" />
          <img
            src={imageJpg2}
            alt="профессиональное оборудование"
            loading="lazy"
          />
        </picture>
        <h3 className="subtitle">профессиональное оборудование</h3>
        <p>
          <span>87 тренажеров</span>
          <span>Все необходимые принадлежности</span>
        </p>
      </li>
      <li className="pl pr">
        <picture className="about__image">
          <source srcSet={imageWebp3} type="image/webp" />
          <img src={imageJpg3} alt="квалифицированные тренеры" loading="lazy" />
        </picture>
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
