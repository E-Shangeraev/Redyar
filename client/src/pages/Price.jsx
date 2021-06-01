import React from 'react'
import Header from '@components/Header/Header'
import Cards from '@components/Cards/Cards'
import Discount from '@components/Discount/Discount'
import Schedule from '@components/Schedule/Schedule'
import Footer from '@components/Footer/Footer'

import imageJpg from '@assets/img/Price/1.jpg'
import imageJpgSmall from '@assets/img/Price/1_small.jpg'
import imageWebp from '@assets/img/Price/1.webp'
import imageWebpSmall from '@assets/img/Price/1_small.webp'

const Price = () => {
  const clubCards = [
    {
      period: '1 месяц',
      cost: '6500',
      info: '5 500 атлетам CRFY Team',
      isHit: false,
    },
    {
      period: '1 месяц',
      cost: '6500',
      info: '5 500 атлетам CRFY Team',
      isHit: false,
    },
    {
      period: '1 месяц',
      cost: '6500',
      info: '5 500 атлетам CRFY Team',
      isHit: true,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Расписание и стоимость</h1>
        <Cards
          title="клубные карты"
          footnote="*Безлимитные (Владельцы могу помещать неограниченное
            кол-во занятий. Действует во всех клубах сети Crossfit RedYar)."
          items={clubCards}
          withBackground
        />
        <div className="pl pr" style={{ position: 'relative', zIndex: '1' }}>
          <picture>
            <source
              srcSet={imageWebpSmall}
              media="(max-width: 560px)"
              type="image/webp"
            />
            <source srcSet={imageJpgSmall} media="(max-width: 560px)" />
            <source srcSet={imageWebp} type="image/webp" />
            <img
              src={imageJpg}
              alt="6 занятий on ramp с тренером по 199 рублей"
              style={{ width: '100%', borderRadius: '15px' }}
            />
          </picture>
        </div>
        <Discount />
        <Cards
          title="разовые посещения"
          footnote="Удобны тем, кто ходит в зал меньше 3-х раз в неделю.
          Действует только в том клубе, в котором куплены)."
          items={clubCards}
        />
        <Schedule />
      </main>
      <Footer />
    </>
  )
}

export default Price
