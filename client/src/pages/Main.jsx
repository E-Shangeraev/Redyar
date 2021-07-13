import React, { Suspense } from 'react'
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
import Location from '@components/Location/Location'
import RedyarHome from '@components/RedyarHome/RedyarHome'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/1.jpg'
import imgTablet1 from '@assets/img/Main/Promo/1_tablet.jpg'
import imgPhone1 from '@assets/img/Main/Promo/1_phone.jpg'
import img2 from '@assets/img/Main/Promo/2.jpg'
import imgTablet2 from '@assets/img/Main/Promo/2_tablet.jpg'
import imgPhone2 from '@assets/img/Main/Promo/2_phone.jpg'
import img3 from '@assets/img/Main/Promo/3.jpg'
import imgTablet3 from '@assets/img/Main/Promo/3_tablet.jpg'
import imgPhone3 from '@assets/img/Main/Promo/3_phone.jpg'
import ReportSlider from '@components/ReportSlider'

const Main = () => {
  const promoSlides = [
    {
      img: img1,
      imgTablet: imgTablet1,
      imgPhone: imgPhone1,
      title: 'Первое занятие бесплатно',
      // eslint-disable-next-line max-len
      text: 'CrossFit использует постоянно варьируемые, высокоинтенсивные функциональные движения. Попробуйте и вы забудете о том, что такое обычный фитнес-клуб',
    },
    {
      img: img2,
      imgTablet: imgTablet2,
      imgPhone: imgPhone2,
      title: 'Первое занятие бесплатно',
      // eslint-disable-next-line max-len
      text: 'CrossFit использует постоянно варьируемые, высокоинтенсивные функциональные движения. Попробуйте и вы забудете о том, что такое обычный фитнес-клуб',
    },
    {
      img: img3,
      imgTablet: imgTablet3,
      imgPhone: imgPhone3,
      title: 'Первое занятие бесплатно',
      // eslint-disable-next-line max-len
      text: 'CrossFit использует постоянно варьируемые, высокоинтенсивные функциональные движения. Попробуйте и вы забудете о том, что такое обычный фитнес-клуб',
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
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Главная страница</h1>
        <Promo
          slides={promoSlides}
          schedule="Смотреть расписание тренировок"
          scrollTo="schedule"
        />
        <Record
          title={['запись', 'на первое', 'занятие']}
          text="Запишитесь на первое бесплатное занятие,
          заполнив форму, и получите приветственный бонус от нас"
          isFirst
        />
        <Features />
        <Founder
          title="Что значит Redyar"
          videoId="B0HNWZarxcc"
          channel="youtube"
        />
        <Why />
        <TeamSlider />
        <AthletesSlider
          render={renderAthletes}
          title="Известные атлеты"
          settings={athletesSettings}
          outerRight
        />
        <Schedule />
        <MerchSlider />
        <Suspense fallback={<div>Загрузка...</div>}>
          <ReportSlider />
        </Suspense>
        <Location />
        <RedyarHome />
      </main>
      <Footer />
    </>
  )
}

export default Main
