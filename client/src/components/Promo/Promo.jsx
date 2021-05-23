/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import { PromoNextArrow, PromoPrevArrow } from './PromoArrows'
import mouseSvg from './mouse.svg'

const Promo = ({ images }) => {
  const promoSliderRef = useRef()

  const next = () => {
    promoSliderRef.current.slickNext()
  }
  const prev = () => {
    promoSliderRef.current.slickPrev()
  }

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
    <section className="promo">
      <Slider ref={promoSliderRef} className="promo__slider" {...settings}>
        {images &&
          images.map((img) => (
            <div className="slide" key={uuidv4()}>
              <div
                className="slide__content"
                style={{ backgroundImage: `url(${img})` }}>
                <h2 className="title slide__title">первое занятие бесплатно</h2>
                <p>
                  В RedYar Crossfit ты забудешь, что такое обычный фитнес-клуб.
                  Здесь ты сам себя вызываешь на бой, и мы проследим, чтобы он
                  был честным.
                </p>
              </div>
            </div>
          ))}
      </Slider>
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
    </section>
  )
}

export default Promo
