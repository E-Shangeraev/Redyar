/* eslint-disable max-len */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Markup } from 'interweave'
import { useParams, useLocation } from 'react-router-dom'
import useHttp from '@hooks/http.hook'
import Back from '@components/Back/Back'
import SocialIcon from '@generic/SocialIcon/SocialIcon'
import SocialLink from '@generic/SocialLink/SocialLink'
import { VKShareButton, InstapaperShareButton } from 'react-share'

import { getArticleById } from '@redux/actions/blog'

import logo from '@assets/img/logo.png'

const url = 'https://redyar-images.s3.eu-west-1.amazonaws.com/'

const Article = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const articleId = useParams().id
  const location = useLocation()
  const item = useSelector(({ article }) => article.item)
  const isLoaded = useSelector(({ article }) => article.isLoaded)

  useEffect(async () => {
    dispatch(getArticleById(articleId, request))
  }, [articleId])

  return (
    <section className="article">
      <div className="wrapper">
        <Back />
        {isLoaded && (
          <article className="article__container">
            <h1 className="article__title">{item.title}</h1>
            <div className="flex align-center mb2">
              <b className="category article__category">{item.categoryName}</b>
              <time className="article__date" pubdate={item.publishedAt}>
                {new Intl.DateTimeFormat().format(new Date(item.publishedAt))}
              </time>
            </div>
            <div className="flex">
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
                  <ul className="flex">
                    <li>
                      <VKShareButton
                        title={item.title}
                        image={item.uploadedFile.path}
                        url={`https://cfry.ru${location.pathname}`}
                        noVkLinks>
                        <SocialIcon name="vk" />
                      </VKShareButton>
                    </li>
                    <li>
                      <InstapaperShareButton
                        title={item.title}
                        url={`https://cfry.ru${location.pathname}`}>
                        <SocialIcon name="instagram" />
                      </InstapaperShareButton>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="subscribe">
                <img
                  className="subscribe__logo"
                  src={logo}
                  alt="Логотип CrossFit Redyar"
                />
                <p className="subscribe__text">
                  Подписывайтесь на наши соцсети и следите за всеми нашими
                  новостями
                </p>
                <ul className="flex">
                  <li>
                    <SocialLink
                      link="https://vk.com/CrossFitredyar"
                      name="vk"
                    />
                  </li>
                  <li>
                    <SocialLink
                      link="https://www.instagram.com/CrossFitredyar/"
                      name="instagram"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Article
