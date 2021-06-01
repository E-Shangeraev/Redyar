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
import img2 from '@assets/img/Main/Promo/1.jpg'
import img3 from '@assets/img/Main/Promo/2.jpg'

const Beginners = () => {
  const promoSlides = [
    {
      img: img1,
      title: 'награды crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
    {
      img: img2,
      title: 'награды crossfit redyar',
      // eslint-disable-next-line max-len
      text: 'Мы завоевали большое количество наград и призов за время существования нашего кроссфита. И хотим поделиться с вами нашими успехами и успехами наших посетителей.',
    },
    {
      img: img3,
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
        <Record />
      </main>
      <Footer />
    </>
  )
}

export default Beginners
