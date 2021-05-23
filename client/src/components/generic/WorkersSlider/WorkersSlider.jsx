import React, { useRef } from 'react'
import Slider from 'react-slick'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import img1 from '../../../assets/img/WorkersSlider/1.png'
import img2 from '../../../assets/img/WorkersSlider/2.png'
import img3 from '../../../assets/img/WorkersSlider/3.png'

import social1 from '../../../assets/icons/vk.png'
import social2 from '../../../assets/icons/instagram.png'
import SliderArrow from '../SliderArrow/SliderArrow'

const WorkersSlider = ({ dust }) => {
  const workersSliderRef = useRef()

  const next = () => {
    workersSliderRef.current.slickNext()
  }
  const prev = () => {
    workersSliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
  }

  return (
    <section
      className={classNames('workers', {
        'workers--dust': dust,
      })}>
      <div className="wrapper workers__wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">наша команда</h2>
          <div className="flex align-center gap1">
            <SliderArrow type="prev" onClickHandle={prev} />
            <SliderArrow type="next" onClickHandle={next} />
          </div>
        </div>
      </div>
      <Slider
        ref={workersSliderRef}
        className="workers__slider pl"
        {...settings}>
        <div>
          <div className="workers__slide">
            <img className="workers__photo" src={img1} alt="" />
            <div>
              <p>
                <span className="workers__name">Мосолов Игорь</span>
                <span className="workers__post">регулярный тренер</span>
              </p>
              <p className="workers__achievements">
                CrossFit level-2 Призер большого кубка 2015 и 2019 Участник
                CrossFit Regionals 2016 и 2017
              </p>
              <ul className="workers__addition">
                <li>Помощь в реабилитации</li>
              </ul>
              <ul className="workers__socials">
                <li>
                  <a href="/">
                    <img src={social1} alt="vk" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={social2} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="workers__slide">
            <img className="workers__photo" src={img2} alt="" />
            <div>
              <p>
                <span className="workers__name">Кеслер Кристина</span>
                <span className="workers__post">регулярный тренер</span>
              </p>

              <p className="workers__achievements">
                CrossFit level-1. Соревнующийся атлет
              </p>
              <ul className="workers__addition">
                <li>Помощь в реабилитации</li>
              </ul>
              <ul className="workers__socials">
                <li>
                  <a href="/">
                    <img src={social1} alt="vk" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={social2} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="workers__slide">
            <img className="workers__photo" src={img3} alt="" />
            <div>
              <p>
                <span className="workers__name">Мосолов Андрей</span>
                <span className="workers__post">основатель</span>
              </p>
              <p className="workers__achievements">
                CrossFit level-2 Призер большого кубка 2015 и 2019 Участник
                CrossFit Regionals 2016 и 2017
              </p>
              <ul className="workers__addition">
                <li>Помощь в реабилитации</li>
              </ul>
              <ul className="workers__socials">
                <li>
                  <a href="/">
                    <img src={social1} alt="vk" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={social2} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="workers__slide">
            <img className="workers__photo" src={img1} alt="" />
            <div>
              <p>
                <span className="workers__name">Мосолов Игорь</span>
                <span className="workers__post">регулярный тренер</span>
              </p>
              <p className="workers__achievements">
                CrossFit level-2 Призер большого кубка 2015 и 2019 Участник
                CrossFit Regionals 2016 и 2017
              </p>
              <ul className="workers__addition">
                <li>Помощь в реабилитации</li>
              </ul>
              <ul className="workers__socials">
                <li>
                  <a href="/">
                    <img src={social1} alt="vk" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={social2} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

WorkersSlider.propTypes = {
  dust: PropTypes.bool,
}

WorkersSlider.defaultProps = {
  dust: false,
}

export default WorkersSlider
