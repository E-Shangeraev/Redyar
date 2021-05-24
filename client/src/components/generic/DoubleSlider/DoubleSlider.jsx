import React, { useRef } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import SliderArrow from '@generic/SliderArrow/SliderArrow'

import img1 from '@assets/img/Workouts/1.jpg'
import img2 from '@assets/img/Workouts/2.jpg'
import img3 from '@assets/img/Workouts/3.jpg'
import img4 from '@assets/img/Workouts/4.jpg'
import img5 from '@assets/img/Workouts/5.jpg'
import img6 from '@assets/img/Workouts/6.jpg'
import img7 from '@assets/img/Workouts/7.jpg'
import img8 from '@assets/img/Workouts/8.jpg'

const DoubleSlider = ({ title }) => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    variableWidth: true,
  }

  return (
    <section className="double-slider">
      <div className="wrapper double-slider__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">{title}</h2>
          <div className="flex align-center gap1">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={firstSliderRef}
        className="double-slider__component"
        {...settings}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </Slider>
      <Slider
        ref={secondSliderRef}
        className="double-slider__component"
        {...settings}>
        <img src={img8} alt="" />
        <img src={img7} alt="" />
        <img src={img6} alt="" />
        <img src={img5} alt="" />
        <img src={img4} alt="" />
        <img src={img3} alt="" />
        <img src={img2} alt="" />
        <img src={img1} alt="" />
      </Slider>
    </section>
  )
}

DoubleSlider.propTypes = {
  title: PropTypes.string.isRequired,
}

export default DoubleSlider
