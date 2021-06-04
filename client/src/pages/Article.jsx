import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '@components/Header/Header'
import Article from '@components/Article/Article'
import ReadMore from '@components/ReadMore/ReadMore'
import Footer from '@components/Footer/Footer'

const ArticlePage = () => {
  const articleId = useParams().id

  useEffect(() => window.scrollTo(0, 0), [articleId])

  return (
    <>
      <Header />
      <main>
        <Article />
        <ReadMore />
      </main>
      <Footer />
    </>
  )
}

export default ArticlePage
