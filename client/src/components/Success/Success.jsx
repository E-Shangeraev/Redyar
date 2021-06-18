import React from 'react'
import PropTypes from 'prop-types'

import imagePng from '@assets/img/Price/2.png'
import imageWebp from '@assets/img/Price/2.webp'
import imagePng2 from './1.png'

const Success = ({ isFirst }) => {
  if (isFirst) {
    return (
      <div className="success">
        <div className="flex column align-center mb1">
          <p className="success__text">
            Поздравляем! Вы записались на бесплатное первое занятие. Как и
            обещали, бонус от нас...
          </p>
          <h3 className="title discount__title">
            <span>скидка 10%</span>
            <span>на безлимитные</span>
            <span>карты</span>
          </h3>
          <picture className="discount__image">
            <source srcSet={imageWebp} type="image/webp" />
            <img src={imagePng} alt="10% скидка" loading="lazy" />
          </picture>
        </div>
      </div>
    )
  }
  return (
    <div className="success">
      <div className="flex column align-center">
        <p className="success__text">Мы обязательно свяжемся с вами</p>
        <h3 className="title success__title">
          <span>Ваша заявка</span>
          <span>отправлена</span>
        </h3>
        <img src={imagePng2} alt="Ваша заявка отправлена" />
      </div>
    </div>
  )
}

Success.propTypes = {
  isFirst: PropTypes.bool,
}

Success.defaultProps = {
  isFirst: false,
}

export default Success
