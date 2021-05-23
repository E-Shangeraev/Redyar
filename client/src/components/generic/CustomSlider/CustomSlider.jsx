import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import SliderArrow from '../SliderArrow/SliderArrow'

// const CustomSlider = ({ title, settings }) => {
//   const sliderRef = useRef()

//   const next = () => {
//     sliderRef.current.slickNext()
//   }
//   const prev = () => {
//     sliderRef.current.slickPrev()
//   }

//   const defaultSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     accessibility: true,
//     arrows: false,
//   }

//   return (
//     <section className="merch">
//       <div className="wrapper slider__wrapper">
//         <div className="flex space-between align-center mb5">
//           <h2 className="title">{title}</h2>
//           <div className="flex align-center gap1">
//             <SliderArrow type="prev" onClickHandle={prev} />
//             <SliderArrow type="next" onClickHandle={next} />
//           </div>
//         </div>
//       </div>
//       <Slider
//         ref={sliderRef}
//         className="slider pl"
//         {...defaultSettings}
//         {...settings}>
//         <div>
//           <div className="merch__slide">
//             <img src={img1} alt="" className="merch__photo" />
//             <div className="flex column">
//               <ul className="merch__sizes">
//                 <li>
//                   <button type="button">M</button>
//                 </li>
//                 <li>
//                   <button type="button">L</button>
//                 </li>
//                 <li>
//                   <button type="button">XL</button>
//                 </li>
//                 <li>
//                   <button type="button">XXL</button>
//                 </li>
//               </ul>
//               <b>1000 руб</b>
//               <span>Фирменная футболка REDYAR</span>
//               <Button>Купить</Button>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </section>
//   )
// }

function CustomSliderWrapper(WrappedComponent, { title, settings }) {
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
