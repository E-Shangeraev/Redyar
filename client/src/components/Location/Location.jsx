import React, { Suspense } from 'react'
import Reviews from '@generic/Reviews/Reviews'
import locationMark from '@assets/icons/location.png'

const MyMap = React.lazy(() => import('@components/MyMap/MyMap'))

const Location = () => (
  <section className="location">
    <div className="wrapper">
      <div className="flex space-between align-center mb5">
        <h2 className="title">как нас найти</h2>
        <p className="location__address">
          <img src={locationMark} alt="Иконка метки на карте" loading="lazy" />
          <span>Красноярск, Белинского 8, ТЦ КОМСОМОЛЛ, 4 эт.</span>
        </p>
      </div>
      <div className="location__map">
        <Suspense fallback={<div>Загрузка...</div>}>
          <MyMap latitude={56.020315} longitude={92.902046} zoom={15.16} />
        </Suspense>
      </div>
      {/* <Reviews /> */}
    </div>
  </section>
)

export default Location
