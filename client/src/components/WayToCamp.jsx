import React from 'react'
import RecordButton from '@generic/RecordButton/RecordButton'

import mapJpg from '@assets/img/Camp/8.jpg'

const WayToCamp = () => (
  <section className="way-to-camp">
    <div className="wrapper-w100-pl">
      <div className="flex align-center gap2">
        <div>
          <h2 className="title mb1">как добраться</h2>
          <p className="mb2">
            Вы можете добраться самостоятельно либо поехать с другими
            участниками клуба!
          </p>
          <RecordButton>забронировать место</RecordButton>
        </div>
        <img src={mapJpg} alt="Карта" />
      </div>
    </div>
  </section>
)

export default WayToCamp
