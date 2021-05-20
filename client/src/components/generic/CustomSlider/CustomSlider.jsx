import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import useHttp from '../../../hooks/http.hook'
import SliderArrow from '../SliderArrow/SliderArrow'

function CustomSliderWrapper(WrappedComponent, { title, settings }) {
  const { loading, error, request } = useHttp()

  const CustomSlider = () => {
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

    // const getItems = async () => {
    //   const data = await request('/api/files')
    //   console.log(data)
    // }

    // useEffect(() => getItems(), [])

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
          <WrappedComponent />
        </Slider>
      </section>
    )
  }

  // CustomSlider.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   settings: PropTypes.objectOf(
  //     PropTypes.oneOfType[(PropTypes.string,
  // PropTypes.number, PropTypes.bool)]
  //   ).isRequired,
  // }

  return CustomSlider
}

export default CustomSliderWrapper
