import React from 'react'
import Features from '../components/Features/Features'
import Founder from '../components/Founder/Founder'
import Header from '../components/Header/Header'
import Promo from '../components/Promo/Promo'
import Record from '../components/Record/Record'

const Main = () => (
  <>
    <Header />
    <main>
      <Promo />
      <Record />
      <Features />
      <Founder />
    </main>
  </>
)

export default Main
