import React from 'react'
import Reviews from '@generic/Reviews/Reviews'
import MyMap from '@components/MyMap/MyMap'
import locationMark from '@assets/icons/location.png'

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
      <div className="location__map">
        <MyMap latitude={56.020315} longitude={92.902046} zoom={15.16} />
      </div>
      <Reviews />
    </div>
  </section>
)

export default Location
