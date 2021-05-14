import React from 'react'
import Slider from 'react-slick'
import { PromoNextArrow, PromoPrevArrow } from './PromoArrows'
import img1 from '../../../assets/img/Main/slider/1.jpg'

const PromoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
  }

  return (
    <Slider className="slider" {...settings}>
      <div className="slide">
        <div
          className="slide__content"
          style={{ backgroundImage: `url(${img1})` }}>
          <h2 className="title slide__title">первое занятие бесплатно</h2>
          <p>
            В RedYar Crossfit ты забудешь, что такое обычный фитнес-клуб. Здесь
            ты сам себя вызываешь на бой, и мы проследим, чтобы он был честным.
          </p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide__content"
          style={{ backgroundImage: `url(${img1})` }}>
          <h2 className="title slide__title">первое занятие бесплатно</h2>
          <p>
            В RedYar Crossfit ты забудешь, что такое обычный фитнес-клуб. Здесь
            ты сам себя вызываешь на бой, и мы проследим, чтобы он был честным.
          </p>
        </div>
      </div>
    </Slider>
  )
}

export default PromoSlider
