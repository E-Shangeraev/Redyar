import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useHttp from '@hooks/http.hook'
import Categories from '@components/Categories/Categories'
import PreviewList from '@components/PreviewList/PreviewList'
import Search from '@components/Search/Search'

import setCategory from '../../redux/actions/filter'
import { getArticles } from '../../redux/actions/articles'

const categoryNames = [
  'Питание',
  'Соревнования',
  'Лагерь',
  'Растяжка',
  'Тренировки',
]
const Blog = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const items = useSelector(({ articles }) => articles.items)
  const isLoaded = useSelector(({ articles }) => articles.isLoaded)
  const { category } = useSelector(({ filter }) => filter)

  const onSelectCategory = useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  useEffect(() => {
    dispatch(getArticles(category, request))
  }, [category])

  return (
    <section className="blog">
      <div className="wrapper">
        <div className="flex space-between align-center mb3">
          <h1 className="title">Наш блог</h1>
          <Search />
        </div>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        {isLoaded ? <PreviewList items={items} /> : null}
      </div>
    </section>
  )
}

export default Blog
