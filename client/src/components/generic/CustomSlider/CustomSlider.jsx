import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import { Markup } from 'interweave'
import SliderArrow from '@generic/SliderArrow/SliderArrow'
import Title from '@generic/Title/Title'
import classNames from 'classnames'

const CustomSlider = ({ title, settings, items, children, outerRight, id }) => {
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
    <section className="slider" id={id}>
      <div className="wrapper slider__wrapper">
        <div className="flex space-between align-center mb5">
          <Title className="slider__title">
            {title &&
              title.map(item => <Markup key={uuidv4()} content={item} />)}
          </Title>
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
        {children}
      </Slider>
    </section>
  )
}

CustomSlider.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  settings: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  outerRight: PropTypes.bool,
  id: PropTypes.string,
}

CustomSlider.defaultProps = {
  items: [],
  children: null,
  id: null,
  outerRight: false,
}

export default CustomSlider
