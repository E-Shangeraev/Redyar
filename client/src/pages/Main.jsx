import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import Record from '@components/Record/Record'
import Features from '@components/Features/Features'
import Founder from '@components/Founder/Founder'
import Why from '@components/Why/Why'
import TeamSlider from '@components/TeamSlider'
import AthletesSlider from '@components/AthletesSlider'
import Athlete from '@components/Athlete/Athlete'
import Schedule from '@components/Schedule/Schedule'

import MerchSlider from '@components/MerchSlider'
import ReportSlider from '@components/ReportSlider'
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

  const renderAthletes = athletes =>
    athletes.length
      ? athletes.map(item => (
          <Athlete
            key={uuidv4()}
            // eslint-disable-next-line max-len
            photo={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
            name={item.name}
            rank={item.rank}
            outerRight
          />
        ))
      : []

  const athletesSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Главная страница</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание тренировок" />
        <Record />
        <Features />
        <Founder title="Основатель" />
        <Why />
        <TeamSlider />
        <AthletesSlider
          render={renderAthletes}
          title="Известные атлеты"
          settings={athletesSettings}
        />
        <Schedule />
        <MerchSlider />
        <ReportSlider />
        <Location />
        <RedyarHome />
      </main>
      <Footer />
    </>
  )
}

export default Main
