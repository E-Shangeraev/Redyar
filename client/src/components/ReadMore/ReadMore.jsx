import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useHttp from '@hooks/http.hook'
import PreviewList from '@components/PreviewList/PreviewList'

import { getSimilarArticles } from '@redux/actions/blog'

const ReadMore = () => {
  const { request } = useHttp()
  const dispatch = useDispatch()
  const articleId = useParams().id
  const items = useSelector(({ articles }) => articles.items)
  const isLoaded = useSelector(({ articles }) => articles.isLoaded)
  const category = useSelector(({ filter }) => filter.category)

  useEffect(async () => {
    dispatch(getSimilarArticles(category, articleId, 3, request))
  }, [])

  return (
    <section className="read-more">
      <div className="wrapper">
        <h2 className="title">Читайте также</h2>
        {isLoaded && <PreviewList items={items} />}
      </div>
    </section>
  )
}

export default ReadMore
