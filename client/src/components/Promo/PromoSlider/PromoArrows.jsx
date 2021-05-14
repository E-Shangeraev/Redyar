/* eslint-disable react/prop-types */
import React from 'react'
import next from './next-arrow.svg'
import prev from './prev-arrow.svg'

const PromoNextArrow = ({ onClickHandle }) => (
  <button className="promo__arrow" type="button" onClick={onClickHandle}>
    <img src={next} alt="Следующий слайд" />
  </button>
)

const PromoPrevArrow = ({ onClickHandle }) => (
  <button className="promo__arrow" type="button" onClick={onClickHandle}>
    <img src={prev} alt="Предыдущий слайд" />
  </button>
)

export { PromoNextArrow, PromoPrevArrow }
