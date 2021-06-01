import React from 'react'

import imagePng from '@assets/img/Price/2.png'
import imageWebp from '@assets/img/Price/2.webp'

const Discount = () => (
  <section className="discount">
    <div className="wrapper">
      <div className="flex space-between align-center mb1">
        <h2 className="title discount__title">
          <span>скидка 10%</span>
          <span>на безлимитные</span>
          <span>карты</span>
        </h2>
        <picture className="discount__image">
          <source srcSet={imageWebp} type="image/webp" />
          <img src={imagePng} alt="10% скидка" />
        </picture>
      </div>
      <ul className="discount__for">
        <li>Семьям</li>
        <li>Атлетам всероссийского уровня</li>
        <li>Ветеранам боевых действий</li>
        <li>Студентам дневного отделения (кроме RedYar Green)</li>
      </ul>
    </div>
  </section>
)

export default Discount
