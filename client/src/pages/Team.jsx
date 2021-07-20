import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import TeamSlider from '@components/TeamSlider'
import TeamPhotoSlider from '@components/TeamPhotoSlider'
import Record from '@components/Record/Record'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/4.jpg'
import imgTablet1 from '@assets/img/Main/Promo/4_tablet.jpg'
import imgPhone1 from '@assets/img/Main/Promo/4_phone.jpg'
import img2 from '@assets/img/Main/Promo/5.jpg'
import imgTablet2 from '@assets/img/Main/Promo/5_tablet.jpg'
import imgPhone2 from '@assets/img/Main/Promo/5_phone.jpg'
import img3 from '@assets/img/Main/Promo/6.jpg'
import imgTablet3 from '@assets/img/Main/Promo/6_tablet.jpg'
import imgPhone3 from '@assets/img/Main/Promo/6_phone.jpg'

const Main = () => {
  const promoSlides = [
    {
      img: img1,
      imgTablet: imgTablet1,
      imgPhone: imgPhone1,
      title: ['команда CrossFit Redyar'],
      // eslint-disable-next-line max-len
      text: 'В команде CrossFit Redyar только настоящие профессионалы своего дела. Лучшие квалифицированные тренеры города, а также администраторы сделают ваши тренировки особенными.',
    },
    {
      img: img2,
      imgTablet: imgTablet2,
      imgPhone: imgPhone2,
      title: ['команда CrossFit Redyar'],
      // eslint-disable-next-line max-len
      text: 'В команде CrossFit Redyar только настоящие профессионалы своего дела. Лучшие квалифицированные тренеры города, а также администраторы сделают ваши тренировки особенными.',
    },
    {
      img: img3,
      imgTablet: imgTablet3,
      imgPhone: imgPhone3,
      title: ['команда CrossFit Redyar'],
      // eslint-disable-next-line max-len
      text: 'В команде CrossFit Redyar только настоящие профессионалы своего дела. Лучшие квалифицированные тренеры города, а также администраторы сделают ваши тренировки особенными.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Команда</h1>
        <Promo
          slides={promoSlides}
          schedule="Познакомиться с командой"
          scrollTo="team"
        />
        <TeamSlider />
        <TeamPhotoSlider />
        <Record
          title={['запись', 'на первое', 'занятие']}
          text="Запишитесь на первое бесплатное занятие, заполнив
          форму и получите приветственный бонус от нас"
        />
      </main>
      <Footer />
    </>
  )
}

export default Main
