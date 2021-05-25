import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import Record from '@components/Record/Record'
import Features from '@components/Features/Features'
import Founder from '@components/Founder/Founder'
import Why from '@components/Why/Why'
import WorkersSlider from '@generic/WorkersSlider/WorkersSlider'
import Athletes from '@components/Athletes/Athletes'
import Schedule from '@components/Schedule/Schedule'

import { MainAthletesPhotos } from '@assets/img/Main'
import MerchSlider from '@components/MerchSlider'
import DoubleSlider from '@components/generic/DoubleSlider/DoubleSlider'
import Location from '@components/Location/Location'
import RedyarHome from '@components/RedyarHome/RedyarHome'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/1.jpg'
import img2 from '@assets/img/Main/Promo/2.jpg'
import img3 from '@assets/img/Main/Promo/3.jpg'

const Main = () => {
  const promoSlides = [
    {
      img: img1,
      title: 'Первое занятие бесплатно',
      // eslint-disable-next-line max-len
      text: 'В RedYar Crossfit ты забудешь, что такое обычный фитнес-клуб. Здесь ты сам себя вызываешь на бой, и мы проследим, чтобы он был честным.',
    },
    {
      img: img2,
      title: 'Первое занятие бесплатно',
      // eslint-disable-next-line max-len
      text: 'В RedYar Crossfit ты забудешь, что такое обычный фитнес-клуб. Здесь ты сам себя вызываешь на бой, и мы проследим, чтобы он был честным.',
    },
    {
      img: img3,
      title: 'Первое занятие бесплатно',
      // eslint-disable-next-line max-len
      text: 'В RedYar Crossfit ты забудешь, что такое обычный фитнес-клуб. Здесь ты сам себя вызываешь на бой, и мы проследим, чтобы он был честным.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Главная страница</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание тренировок" />
        <Record />
        <Features />
        <Founder />
        <Why />
        <WorkersSlider dust />
        <Athletes images={MainAthletesPhotos} />
        <Schedule />
        <MerchSlider />
        <DoubleSlider title="фото с тренировок" />
        <Location />
        <RedyarHome />
      </main>
      <Footer />
    </>
  )
}

export default Main
