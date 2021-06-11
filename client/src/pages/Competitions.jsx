import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import CompetitionSlider from '@components/CompetitionSlider'
import ReportSlider from '@components/ReportSlider'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/2.jpg'
import imgTablet1 from '@assets/img/Main/Promo/2_tablet.jpg'
import imgPhone1 from '@assets/img/Main/Promo/2_phone.jpg'
import img2 from '@assets/img/Main/Promo/3.jpg'
import imgTablet2 from '@assets/img/Main/Promo/3_tablet.jpg'
import imgPhone2 from '@assets/img/Main/Promo/3_phone.jpg'
import img3 from '@assets/img/Main/Promo/4.jpg'
import imgTablet3 from '@assets/img/Main/Promo/4_tablet.jpg'
import imgPhone3 from '@assets/img/Main/Promo/4_phone.jpg'

const Competitions = () => {
  const promoSlides = [
    {
      img: img1,
      imgTablet: imgTablet1,
      imgPhone: imgPhone1,
      title: 'Соревнования от Redyar',
      // eslint-disable-next-line max-len
      text: 'Брось себе вызов - участвуй в соревнованиях от CrossFit Redyar, выигрывай ценные призы.',
    },
    {
      img: img2,
      imgTablet: imgTablet2,
      imgPhone: imgPhone2,
      title: 'Соревнования от Redyar',
      // eslint-disable-next-line max-len
      text: 'Брось себе вызов - участвуй в соревнованиях от CrossFit Redyar, выигрывай ценные призы.',
    },
    {
      img: img3,
      imgTablet: imgTablet3,
      imgPhone: imgPhone3,
      title: 'Соревнования от Redyar',
      // eslint-disable-next-line max-len
      text: 'Брось себе вызов - участвуй в соревнованиях от CrossFit Redyar, выигрывай ценные призы.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Соревнования</h1>
        <Promo
          slides={promoSlides}
          schedule="Смотреть расписание соревнований"
        />
        <CompetitionSlider />
        <ReportSlider />
      </main>
      <Footer />
    </>
  )
}

export default Competitions
