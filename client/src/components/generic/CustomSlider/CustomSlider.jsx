import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import SliderArrow from '@generic/SliderArrow/SliderArrow'
import classNames from 'classnames'

const CustomSlider = ({ title, settings, items, outerRight, id }) => {
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
    lazyLoad: true,
    arrows: false,
  }

  return (
    <section className="slider" id={id}>
      <div className="wrapper slider__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">{title}</h2>
          <div className="slider__arrows">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        className={classNames('slider__component pl pr', {
          'slider__component--outer-right': outerRight,
        })}
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
  outerRight: PropTypes.bool,
  id: PropTypes.string,
}

CustomSlider.defaultProps = {
  items: [],
  id: null,
  outerRight: false,
}

export default CustomSlider
