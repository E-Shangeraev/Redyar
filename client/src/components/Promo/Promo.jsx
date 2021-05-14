import React, { useRef } from 'react'
import PromoBottom from './PromoBottom/PromoBottom'
import PromoSlider from './PromoSlider/PromoSlider'

const Promo = () => {
  const promoSliderRef = useRef()

  const next = () => {
    promoSliderRef.current.slickNext()
  }
  const prev = () => {
    promoSliderRef.current.slickPrev()
  }

  console.log(promoSliderRef)

  return (
    <section className="promo">
      <PromoSlider />
      <PromoBottom next={next} prev={prev} />
    </section>
  )
}

export default Promo
