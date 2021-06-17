/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import ReactModal from 'react-modal'
import { Link } from 'react-scroll'
import Modal from '@components/Modal/Modal'
import { v4 as uuidv4 } from 'uuid'
import { PromoNextArrow, PromoPrevArrow } from './PromoArrows'
import mouseSvg from './mouse.svg'

ReactModal.setAppElement('#root')

const Promo = ({ slides, schedule }) => {
  const promoSliderRef = useRef()
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

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
    swipe: false,
  }

  return (
    <section className="promo">
      <Slider ref={promoSliderRef} className="promo__slider" {...settings}>
        {slides &&
          slides.map(slide => (
            <div className="slide" key={uuidv4()}>
              <div className="slide__content">
                <picture className="promo__image">
                  <source srcSet={slide.imgPhone} media="(max-width: 500px)" />
                  <source
                    srcSet={slide.imgTablet}
                    media="(max-width: 1024px)"
                  />
                  <img src={slide.img} alt="Фото с тренировок" loading="lazy" />
                </picture>
                <h2 className="title slide__title">{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
      </Slider>
      <div className="promo__bottom">
        <div className="promo__mouse">
          <object type="image/svg+xml" data={mouseSvg} tabIndex="-1">
            Your browser does not support SVG
          </object>
          <span>Листайте вниз</span>
        </div>
        <div>
          <Link to="schedule" smooth className="promo__schedule" tabIndex="0">
            {schedule}
          </Link>
          <div>
            <div className="promo__arrows">
              <PromoPrevArrow onClickHandle={prev} />
              <PromoNextArrow onClickHandle={next} />
            </div>
            <button
              className="promo__button-modal"
              type="button"
              onClick={openModal}>
              Написать нам
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              title={['напишите нам']}
              text="Вы можете задать нам интересующие Вас вопросы.
              Заполните форму ниже и мы ответим Вам в ближайшее время"
              hasTextarea
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
