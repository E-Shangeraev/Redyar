import React from 'react'
import locationMark from '../../assets/icons/location.png'
import Reviews from '../Reviews/Reviews'

const Location = () => (
  <section className="location">
    <div className="wrapper">
      <div className="flex space-between align-center mb5">
        <h2 className="title">как нас найти</h2>
        <p className="location__address">
          <img src={locationMark} alt="Иконка метки на карте" />
          <span>Красноярск, Белинского 8, ТЦ КОМСОМОЛЛ, 4 эт.</span>
        </p>
      </div>
      <div className="location__map" />
      <Reviews />
    </div>
  </section>
)

export default Location
