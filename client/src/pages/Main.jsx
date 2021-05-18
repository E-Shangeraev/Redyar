import React from 'react'
import Header from '../components/Header/Header'
import Promo from '../components/Promo/Promo'
import Record from '../components/Record/Record'
import Features from '../components/Features/Features'
import Founder from '../components/Founder/Founder'
import Why from '../components/Why/Why'
import WorkersSlider from '../components/generic/WorkersSlider/WorkersSlider'
import Athletes from '../components/Athletes/Athletes'
import Schedule from '../components/Schedule/Schedule'

import { MainPromoPhotos, MainAthletesPhotos } from '../assets/img/Main'
import MerchSlider from '../components/MerchSlider'
import DoubleSlider from '../components/generic/DoubleSlider/DoubleSlider'
import Location from '../components/Location/Location'
import RedyarHome from '../components/RedyarHome/RedyarHome'
import Footer from '../components/Footer/Footer'

const Main = () => (
  <>
    <Header />
    <main>
      <Promo images={MainPromoPhotos} />
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

export default Main
