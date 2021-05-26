import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import TeamSlider from '@components/TeamSlider'
import DoubleSlider from '@components/generic/DoubleSlider/DoubleSlider'
import Record from '@components/Record/Record'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/4.jpg'
import img2 from '@assets/img/Main/Promo/5.jpg'
import img3 from '@assets/img/Main/Promo/6.jpg'

const Main = () => {
  const promoSlides = [
    {
      img: img1,
      title: 'команда crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'В команде CrossFit Redyar только настоящие профессионалы своего дела. Лучшие квалифицированные тренеры города, а также администраторы сделают ваши тренировки особенными.',
    },
    {
      img: img2,
      title: 'команда crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'В команде CrossFit Redyar только настоящие профессионалы своего дела. Лучшие квалифицированные тренеры города, а также администраторы сделают ваши тренировки особенными.',
    },
    {
      img: img3,
      title: 'команда crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'В команде CrossFit Redyar только настоящие профессионалы своего дела. Лучшие квалифицированные тренеры города, а также администраторы сделают ваши тренировки особенными.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Команда</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание лагеря" />
        <TeamSlider />
        <Record />
      </main>
      <Footer />
    </>
  )
}

export default Main
