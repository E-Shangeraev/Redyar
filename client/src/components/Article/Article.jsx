import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Markup } from 'interweave'
import { useParams } from 'react-router-dom'
import useHttp from '@hooks/http.hook'
import Back from '@generic/Back/Back'

import { getArticleById } from '@redux/actions/blog'

import logo from '@assets/img/logo.png'

const url = 'https://redyar-images.s3.eu-west-1.amazonaws.com/'

const Article = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const articleId = useParams().id
  const item = useSelector(({ article }) => article.item)
  const isLoaded = useSelector(({ article }) => article.isLoaded)

  useEffect(async () => {
    dispatch(getArticleById(articleId, request))
  }, [])

  return (
    <section className="article">
      <div className="wrapper">
        {isLoaded && (
          <article className="article__container">
            <Back />
            <h1 className="article__title">{item.title}</h1>
            <div className="flex align-center mb2">
              <b className="category article__category">{item.categoryName}</b>
              <time className="article__date" pubdate={item.publishedAt}>
                {new Intl.DateTimeFormat().format(new Date(item.publishedAt))}
              </time>
            </div>
            <div className="flex gap2">
              <div className="article__content">
                <img
                  className="article__img"
                  src={`${url}${item.uploadedFile.path}`}
                  alt={item.title}
                />
                <div className="article__text">
                  <Markup content={item.text} />
                </div>
                <div className="article__share">
                  <span>Поделиться:</span>
                  <div className="flex gap2">
                    <button type="button">VK</button>
                    <button type="button">Instagram</button>
                  </div>
                </div>
              </div>
              <div className="subscribe">
                <img
                  className="subscribe__logo"
                  src={logo}
                  alt="Логотип Crossfit Redyar"
                />
                <p className="subscribe__text">
                  Подписывайтесь на наши соцсети и следите за всеми нашими
                  новостями
                </p>
                <div className="flex gap2">
                  <button type="button">VK</button>
                  <button type="button">Instagram</button>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Article
