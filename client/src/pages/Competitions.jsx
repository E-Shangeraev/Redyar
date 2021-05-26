import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import CompetitionSlider from '@components/CompetitionSlider'
import ReportSlider from '@components/ReportSlider'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/2.jpg'
import img2 from '@assets/img/Main/Promo/3.jpg'
import img3 from '@assets/img/Main/Promo/4.jpg'

const Competitions = () => {
  const promoSlides = [
    {
      img: img1,
      title: 'Соревнования от Redyar',
      // eslint-disable-next-line max-len
      text: 'Брось себе вызов - участвуй в соревнованиях от CrossFit Redyar, выигрывай ценные призы.',
    },
    {
      img: img2,
      title: 'Соревнования от Redyar',
      // eslint-disable-next-line max-len
      text: 'Брось себе вызов - участвуй в соревнованиях от CrossFit Redyar, выигрывай ценные призы.',
    },
    {
      img: img3,
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
