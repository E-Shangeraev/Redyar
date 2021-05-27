import React from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import Record from '@components/Record/Record'
import About from '@components/About/About'
import CampPhotoSlider from '@components/CampPhotoSlider'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/3.jpg'
import img2 from '@assets/img/Main/Promo/4.jpg'
import img3 from '@assets/img/Main/Promo/5.jpg'

import aboutImageJpg from '@assets/img/Camp/1.jpg'
import aboutImageWebp from '@assets/img/Camp/1.webp'
import aboutImageJpgSmall from '@assets/img/Camp/1_small.jpg'
import aboutImageWebpSmall from '@assets/img/Camp/1_small.webp'

const Main = () => {
  const promoSlides = [
    {
      img: img1,
      title: 'RedYar “лагерь”',
      // eslint-disable-next-line max-len
      text: 'В “Лагере” RedYar ты обретешь единомышленников, вместе с которыми сможешь насладиться насыщенной на активности программой лагеря.',
    },
    {
      img: img2,
      title: 'RedYar “лагерь”',
      // eslint-disable-next-line max-len
      text: 'В “Лагере” RedYar ты обретешь единомышленников, вместе с которыми сможешь насладиться насыщенной на активности программой лагеря.',
    },
    {
      img: img3,
      title: 'RedYar “лагерь”',
      // eslint-disable-next-line max-len
      text: 'В “Лагере” RedYar ты обретешь единомышленников, вместе с которыми сможешь насладиться насыщенной на активности программой лагеря.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Команда</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание лагеря" />
        <Record />
        <About
          image={{
            jpg: aboutImageJpg,
            jpgSmall: aboutImageJpgSmall,
            webp: aboutImageWebp,
            webpSmall: aboutImageWebpSmall,
          }}
          alt="Лагерь Redyar"
          text="В нашем лагере только профессиоельные тренеры,
          которые выжмут из вас все соки. Десятки видов испытаний
          проверят вас на прочность. Выбор за тобой!"
          items={['21 тренер', '2 недели', '40 человек', '29 испытаний']}
        />
        <CampPhotoSlider />
      </main>
      <Footer />
    </>
  )
}

export default Main
