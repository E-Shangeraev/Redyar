import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import SliderArrow from '@generic/SliderArrow/SliderArrow'

const DoubleSlider = ({ title, settings, items }) => {
  const firstSliderRef = useRef()
  const secondSliderRef = useRef()

  const next = () => {
    firstSliderRef.current.slickNext()
    secondSliderRef.current.slickPrev()
  }
  const prev = () => {
    firstSliderRef.current.slickPrev()
    secondSliderRef.current.slickNext()
  }

  let defaultSettings

  useEffect(() => {
    defaultSettings = {
      dots: false,
      accessibility: true,
      arrows: false,
      swipe: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 501,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
  }, [items])

  return (
    <section className="double-slider">
      <div className="wrapper double-slider__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">{title}</h2>
          <div className="double-slider__arrows">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={firstSliderRef}
        className="double-slider__component"
        {...defaultSettings}
        {...settings}>
        {items}
      </Slider>
      <Slider
        ref={secondSliderRef}
        className="double-slider__component"
        {...defaultSettings}
        {...settings}>
        {[...items].reverse()}
      </Slider>
    </section>
  )
}

DoubleSlider.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  settings: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}

DoubleSlider.defaultProps = {
  items: [],
}

export default DoubleSlider
