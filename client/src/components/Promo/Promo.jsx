/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import Slider from 'react-slick'
import Modal from 'react-modal'
import ModalFeedback from '@components/Modal/ModalFeedback'
import { v4 as uuidv4 } from 'uuid'
import { PromoNextArrow, PromoPrevArrow } from './PromoArrows'
import mouseSvg from './mouse.svg'

Modal.setAppElement('#root')

const Promo = ({ slides, schedule }) => {
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
        {slides &&
          slides.map(slide => (
            <div className="slide" key={uuidv4()}>
              <div
                className="slide__content"
                style={{ backgroundImage: `url(${slide.img})` }}>
                <h2 className="title slide__title">{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
      </Slider>
      <div className="promo__bottom">
        <div className="promo__mouse">
          <object type="image/svg+xml" data={mouseSvg}>
            Your browser does not support SVG
          </object>
          <span>Листайте вниз</span>
        </div>
        <div>
          <a className="promo__schedule" href="#schedule">
            {schedule}
          </a>
          <div>
            <div className="promo__arrows">
              <PromoPrevArrow onClickHandle={prev} />
              <PromoNextArrow onClickHandle={next} />
            </div>
            <ModalFeedback />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
