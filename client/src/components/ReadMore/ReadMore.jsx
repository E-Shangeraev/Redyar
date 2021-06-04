import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useHttp from '@hooks/http.hook'
import PreviewList from '@components/PreviewList/PreviewList'

import { getSimilarArticles } from '@redux/actions/blog'

const ReadMore = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const articleId = useParams().id
  const items = useSelector(({ articles }) => articles.items)
  const category = useSelector(({ filter }) => filter.category)

  useEffect(async () => {
    dispatch(getSimilarArticles(category, articleId, 3, request))
  }, [articleId])

  if (items.length) {
    return (
      <section className="read-more">
        <div className="wrapper">
          <h2 className="title">Читайте также</h2>
          <PreviewList items={items} />
        </div>
      </section>
    )
  }
  return null
}

export default ReadMore
