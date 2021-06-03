import React from 'react'
import Header from '@components/Header/Header'
import Article from '@components/Article/Article'
import ReadMore from '@components/ReadMore/ReadMore'
import Footer from '@components/Footer/Footer'

const ArticlePage = () => (
  <>
    <Header />
    <main>
      <Article />
      <ReadMore />
    </main>
    <Footer />
  </>
)

export default ArticlePage
