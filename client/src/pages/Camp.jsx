import React, { Suspense } from 'react'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import Record from '@components/Record/Record'
import About from '@components/About/About'
import DailyRoutine from '@components/DailyRoutine/DailyRoutine'
import Besides from '@components/Besides/Besides'
import VideoReport from '@components/VideoReport/VideoReport'
import FAQ from '@components/FAQ/FAQ'
import CampLocation from '@components/CampLocation/CampLocation'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/3.jpg'
import imgTablet1 from '@assets/img/Main/Promo/3_tablet.jpg'
import imgPhone1 from '@assets/img/Main/Promo/3_phone.jpg'
import img2 from '@assets/img/Main/Promo/4.jpg'
import imgTablet2 from '@assets/img/Main/Promo/4_tablet.jpg'
import imgPhone2 from '@assets/img/Main/Promo/4_phone.jpg'
import img3 from '@assets/img/Main/Promo/5.jpg'
import imgTablet3 from '@assets/img/Main/Promo/5_tablet.jpg'
import imgPhone3 from '@assets/img/Main/Promo/5_phone.jpg'

import aboutImageJpg from '@assets/img/Camp/1.jpg'
import aboutImageWebp from '@assets/img/Camp/1.webp'
import aboutImageJpgSmall from '@assets/img/Camp/1_small.jpg'
import aboutImageWebpSmall from '@assets/img/Camp/1_small.webp'
import aboutBg from '@assets/img/Camp/bg.png'

const CampPhotoSlider = React.lazy(() => import('@components/CampPhotoSlider'))

const Camp = () => {
  const promoSlides = [
    {
      img: img1,
      imgTablet: imgTablet1,
      imgPhone: imgPhone1,
      title: 'RedYar “лагерь”',
      // eslint-disable-next-line max-len
      text: 'В “Лагере” RedYar ты обретешь единомышленников, вместе с которыми сможешь насладиться насыщенной на активности программой лагеря.',
    },
    {
      img: img2,
      imgTablet: imgTablet2,
      imgPhone: imgPhone2,
      title: 'RedYar “лагерь”',
      // eslint-disable-next-line max-len
      text: 'В “Лагере” RedYar ты обретешь единомышленников, вместе с которыми сможешь насладиться насыщенной на активности программой лагеря.',
    },
    {
      img: img3,
      imgTablet: imgTablet3,
      imgPhone: imgPhone3,
      title: 'RedYar “лагерь”',
      // eslint-disable-next-line max-len
      text: 'В “Лагере” RedYar ты обретешь единомышленников, вместе с которыми сможешь насладиться насыщенной на активности программой лагеря.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Лагерь</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание лагеря" />
        <Record
          title={['запись', 'в лагерь', 'redyar']}
          text="Запишитесь в лагерь, заполнив форму и получите приветственный
          бонус от нас. Не забудьте выбрать поток в фоме записи"
          isCamp
        />
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
          background={aboutBg}
        />
        <Suspense fallback={<div>Загрузка...</div>}>
          <CampPhotoSlider />
        </Suspense>
        <DailyRoutine />
        <Besides />
        <VideoReport />
        <FAQ title="вопрос-ответ" fetchUrl="/api/faq/camp" />
        <CampLocation />
      </main>
      <Footer />
    </>
  )
}

export default Camp
