import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import SliderArrow from '../generic/SliderArrow/SliderArrow'

const Athletes = ({ images }) => {
  const athletesSliderRef = useRef()

  const next = () => {
    athletesSliderRef.current.slickNext()
  }
  const prev = () => {
    athletesSliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
  }

  return (
    <section className="athletes">
      <div className="wrapper athletes__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">Известные атлеты</h2>
          <div className="flex align-center gap1">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={athletesSliderRef}
        className="athletes__slider pl"
        {...settings}>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[0]} alt="" />
            <span className="athletes__name">Мурад Нукхадиев</span>
            <p className="athletes__achievements">
              борец вольного стиля, МСМК по вольной борьбе, серебряный призёр
              кубка мира 2014
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[1]} alt="" />
            <span className="athletes__name">Осипенко Настя</span>
            <p className="athletes__achievements">
              пловец, МСМК, призёр международных турниров по плаванию
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[2]} alt="" />
            <span className="athletes__name">Александра Дмитриева</span>
            <p className="athletes__achievements">
              МС по боксу, серебряный призёр чемпионата России
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[3]} alt="" />
            <span className="athletes__name">Ольга Хорошавцева</span>
            <p className="athletes__achievements">
              МСМК по вольной борьбе, чемпионка России и Европы, победительница
              гран-при Иван Ярыгин
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[0]} alt="" />
            <span className="athletes__name">Мурад Нукхадиев</span>
            <p className="athletes__achievements">
              борец вольного стиля, МСМК по вольной борьбе, серебряный призёр
              кубка мира 2014
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[1]} alt="" />
            <span className="athletes__name">Осипенко Настя</span>
            <p className="athletes__achievements">
              пловец, МСМК, призёр международных турниров по плаванию
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[2]} alt="" />
            <span className="athletes__name">Александра Дмитриева</span>
            <p className="athletes__achievements">
              МС по боксу, серебряный призёр чемпионата России
            </p>
          </div>
        </div>
        <div>
          <div className="athletes__slide">
            <img className="athletes__photo" src={images[3]} alt="" />
            <span className="athletes__name">Ольга Хорошавцева</span>
            <p className="athletes__achievements">
              МСМК по вольной борьбе, чемпионка России и Европы, победительница
              гран-при Иван Ярыгин
            </p>
          </div>
        </div>
      </Slider>
    </section>
  )
}

Athletes.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Athletes
