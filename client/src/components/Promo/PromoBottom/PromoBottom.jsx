/* eslint-disable react/prop-types */
import React from 'react'
import mouseSvg from './mouse.svg'
import { PromoNextArrow, PromoPrevArrow } from '../PromoSlider/PromoArrows'

const PromoBottom = ({ next, prev }) => (
  <div className="promo__bottom">
    <div className="promo__mouse">
      <img src={mouseSvg} alt="Листайте вниз" />
      <span>Листайте вниз</span>
    </div>
    <div>
      <a className="promo__schedule" href="#schedule">
        Смотреть расписание тренировок
      </a>
      <div>
        <div className="promo__arrows">
          <PromoPrevArrow onClickHandle={prev} />
          <PromoNextArrow onClickHandle={next} />
        </div>
        <button className="promo__button-modal" type="button">
          Написать нам
        </button>
      </div>
    </div>
  </div>
)

export default PromoBottom
