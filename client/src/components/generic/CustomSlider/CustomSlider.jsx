import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import SliderArrow from '@generic/SliderArrow/SliderArrow'

const CustomSlider = ({ title, settings, items }) => {
  const sliderRef = useRef()

  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
  }

  const defaultSettings = {
    dots: false,
    accessibility: true,
    arrows: false,
  }

  return (
    <section className="slider">
      <div className="wrapper slider__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">{title}</h2>
          <div className="flex align-center gap1">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        className="slider__component pl"
        {...defaultSettings}
        {...settings}>
        {items}
      </Slider>
    </section>
  )
}

CustomSlider.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  settings: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}

CustomSlider.defaultProps = {
  items: [],
}

export default CustomSlider
