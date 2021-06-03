export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const setArticles = items => ({
  type: 'SET_ARTICLES',
  payload: items,
})

export const getArticles = (category, request) => async dispatch => {
  dispatch(setLoaded(false))

  const params = category !== null ? `?category=${category}` : ''
  const items = await request(`/blog${params}`)

  dispatch(setArticles(items))
}

export const setSimilarArticles = items => ({
  type: 'SET_SIMILAR_ARTICLES',
  payload: items,
})

export const getSimilarArticles =
  (category, skip, limit, request) => async dispatch => {
    dispatch(setLoaded(false))

    const params =
      category !== null
        ? `?category=${category}&skip=${skip}&=limit${limit}`
        : `?skip=${skip}&=limit${limit}`
    const items = await request(`/blog/similar${params}`)

    dispatch(setSimilarArticles(items))
  }

export const setArticleById = item => ({
  type: 'SET_ARTICLE_BY_ID',
  payload: item,
})

export const getArticleById = (id, request) => async dispatch => {
  dispatch(setLoaded(false))

  const item = await request(`/blog/${id}`)

  dispatch(setArticleById(item))
}
