import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from '@components/Header/Header'
import Promo from '@components/Promo/Promo'
import AwardsTabs from '@components/AwardsTabs/AwardsTabs'
import AthletesSlider from '@components/AthletesSlider'
import OurAthlete from '@components/OurAthlete/OurAthlete'
import Record from '@components/Record/Record'
import Footer from '@components/Footer/Footer'

import img1 from '@assets/img/Main/Promo/6.jpg'
import imgTablet1 from '@assets/img/Main/Promo/6_tablet.jpg'
import imgPhone1 from '@assets/img/Main/Promo/6_phone.jpg'
import img2 from '@assets/img/Main/Promo/1.jpg'
import imgTablet2 from '@assets/img/Main/Promo/1_tablet.jpg'
import imgPhone2 from '@assets/img/Main/Promo/1_phone.jpg'
import img3 from '@assets/img/Main/Promo/2.jpg'
import imgTablet3 from '@assets/img/Main/Promo/2_tablet.jpg'
import imgPhone3 from '@assets/img/Main/Promo/2_phone.jpg'

const Beginners = () => {
  const promoSlides = [
    {
      img: img1,
      imgTablet: imgTablet1,
      imgPhone: imgPhone1,
      title: 'награды crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
    {
      img: img2,
      imgTablet: imgTablet2,
      imgPhone: imgPhone2,
      title: 'награды crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
    {
      img: img3,
      imgTablet: imgTablet3,
      imgPhone: imgPhone3,
      title: 'награды crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
  ]

  const renderAthletes = athletes =>
    athletes.length
      ? athletes.map(item => (
          <OurAthlete
            key={uuidv4()}
            // eslint-disable-next-line max-len
            photo={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
            name={item.name}
            rank={item.rank}
            achievements={item.achievements}
          />
        ))
      : []

  const athletesSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
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
        <h1 className="visually-hidden">Награды Crossfit Redyar</h1>
        <Promo slides={promoSlides} schedule="Смотреть расписание лагеря" />
        <AwardsTabs />
        <AthletesSlider
          render={renderAthletes}
          title="Наши атлеты"
          settings={athletesSettings}
          outerRight={false}
        />
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
