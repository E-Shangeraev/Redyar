import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import AwardsTabs from '@components/AwardsTabs/AwardsTabs'
import AthletesCards from '@components/AthletesCards/AthletesCards'
import CompetingAthletesSlider from '@components/CompetingAthletesSlider'
import Record from '@components/Record/Record'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/6.jpg'
import imgTablet1 from '@assets/img/Main/Promo/6_tablet.jpg'
import imgPhone1 from '@assets/img/Main/Promo/6_phone.jpg'
import img2 from '@assets/img/Main/Promo/1.jpg'
import imgTablet2 from '@assets/img/Main/Promo/1_tablet.jpg'
import imgPhone2 from '@assets/img/Main/Promo/1_phone.jpg'
import img3 from '@assets/img/Main/Promo/2.jpg'
import imgTablet3 from '@assets/img/Main/Promo/2_tablet.jpg'
import imgPhone3 from '@assets/img/Main/Promo/2_phone.jpg'

const Athletes = () => {
  const promoSlides = [
    {
      img: img1,
      imgTablet: imgTablet1,
      imgPhone: imgPhone1,
      title: ['Соревнующиеся', 'атлеты', '<b>CrossFit Redyar</b>'],
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
    {
      img: img2,
      imgTablet: imgTablet2,
      imgPhone: imgPhone2,
      title: ['Соревнующиеся', 'атлеты', '<b>CrossFit Redyar</b>'],
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
    {
      img: img3,
      imgTablet: imgTablet3,
      imgPhone: imgPhone3,
      title: ['Соревнующиеся', 'атлеты', '<b>CrossFit Redyar</b>'],
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Награды CrossFit Redyar</h1>
        <Promo
          slides={promoSlides}
          schedule="Смотреть наши заслуги"
          scrollTo="awards"
        />
        <AthletesCards />
        <AwardsTabs />
        <CompetingAthletesSlider />
        <Record
          title={['стать частью', 'команды', 'Redyar']}
          text="Заполните форму, мы свяжемся с вами и расскажем
          что для этого нужно"
          isFirst
        />
      </main>
      <Footer />
    </>
  )
}

export default Athletes
