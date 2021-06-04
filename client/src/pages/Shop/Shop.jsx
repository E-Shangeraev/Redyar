import React from 'react'
import Header from '@components/Header/Header'
import CartButton from '@components/CartButton/CartButton'
import Goods from '@components/Goods/Goods'
import Filters from '@components/Filters/Filters'
import Footer from '@components/Footer/Footer'

const Shop = () => (
  <>
    <Header />
    <main>
      <section className="shop">
        <div className="wrapper">
          <div className="flex space-between align-center mb5">
            <h1 className="title">наш мерч</h1>
            <CartButton count={2} />
          </div>
          <div className="flex space-between">
            <Filters />
            <Goods />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default Shop
