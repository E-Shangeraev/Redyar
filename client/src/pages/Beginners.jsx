import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import Record from '@components/Record/Record'
import About from '@components/About/About'
import FeaturesBlocks from '@generic/FeaturesBlocks/FeaturesBlocks'
import ReportSlider from '@components/ReportSlider'
import Founder from '@components/Founder/Founder'
import FAQ from '@components/FAQ/FAQ'
import Location from '@components/Location/Location'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/5.jpg'
import img2 from '@assets/img/Main/Promo/6.jpg'
import img3 from '@assets/img/Main/Promo/1.jpg'

import aboutImageJpg from '@assets/img/Beginners/1.jpg'
import aboutImageWebp from '@assets/img/Beginners/1.webp'
import aboutImageJpgSmall from '@assets/img/Beginners/1_small.jpg'
import aboutImageWebpSmall from '@assets/img/Beginners/1_small.webp'
import aboutBg from '@assets/img/Beginners/bg.png'

const Beginners = () => {
  const promoSlides = [
    {
      img: img1,
      title: 'новичкам crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Эту страницу мы подготовили для новичков в кроссфите. Вы узнаете, что такое кроссфит, его особенности и получите ответы на самые популярные вопросы.',
    },
    {
      img: img2,
      title: 'новичкам crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Эту страницу мы подготовили для новичков в кроссфите. Вы узнаете, что такое кроссфит, его особенности и получите ответы на самые популярные вопросы.',
    },
    {
      img: img3,
      title: 'новичкам crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Эту страницу мы подготовили для новичков в кроссфите. Вы узнаете, что такое кроссфит, его особенности и получите ответы на самые популярные вопросы.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Новичкам</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание лагеря" />
        <About
          image={{
            jpg: aboutImageJpg,
            jpgSmall: aboutImageJpgSmall,
            webp: aboutImageWebp,
            webpSmall: aboutImageWebpSmall,
          }}
          alt="Кроссфит"
          text="Кроссфит – это различные упражнения на силу и выносливость.
          Это круговая тренировка, которая включает в себя движения из разных
          видов спорта, таких как гребля, тяжелая и легкая атлетика, гиревой
          спорт и т.д. Благодаря кроссфиту задействуются все группы мышц,
          что показывает довольно внушительный итоговый результат."
          items={['выносливость', 'сила', 'гибкость', 'упорство']}
          background={aboutBg}>
          <FeaturesBlocks
            items={[
              'Подходит для мужчин, женщин и подростков',
              'Помогает сбросить вес и нарастить мышцы',
              'Дает бонусы в виде силы, гибкости и выносливости',
            ]}
          />
        </About>

        <ReportSlider />
        <Founder
          title="Основатель о кроссфите"
          channel="custom"
          url="https://vk.com/video-59029020_456239162"
        />
        <FAQ title="популярные вопросы" fetchUrl="/api/faq/beginners" />
        <Location />
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

export default Beginners
