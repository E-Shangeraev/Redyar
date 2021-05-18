import React, { useRef } from 'react'
import Slider from 'react-slick'
import SliderArrow from './generic/SliderArrow/SliderArrow'
import Merch from './Merch/Merch'

// import React from 'react'
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-cycle
// import CustomSliderWrapper from '../generic/CustomSlider/CustomSlider'

import img1 from '../assets/img/Merch/1.png'
import img2 from '../assets/img/Merch/2.png'
import img3 from '../assets/img/Merch/3.png'
import img4 from '../assets/img/Merch/4.png'

const MerchSlider = () => {
  const sliderRef = useRef()

  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
  }

  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
  }

  return (
    <section className="slider">
      <div className="wrapper slider__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">Мерч</h2>
          <div className="flex align-center gap1">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        className="slider__component pl"
        {...defaultSettings}>
        <Merch img={img1} name="Фирменная футболка REDYAR" price={1000} />
        <Merch img={img2} name="Фирменная футболка REDYAR" price={1500} />
        <Merch img={img3} name="Фирменная футболка REDYAR" price={1050} />
        <Merch img={img4} name="Фирменная футболка REDYAR" price={2000} />
        <Merch img={img1} name="Фирменная футболка REDYAR" price={1000} />
        <Merch img={img2} name="Фирменная футболка REDYAR" price={1500} />
        <Merch img={img3} name="Фирменная футболка REDYAR" price={1050} />
        <Merch img={img4} name="Фирменная футболка REDYAR" price={2000} />
      </Slider>
    </section>
  )
}

// const MerchSlider = CustomSliderWrapper(MerchList, {
//   title: 'Мерч',
//   settings: {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   },
// })

export default MerchSlider
