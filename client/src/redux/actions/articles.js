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

  const items = await request(
    `/api/articles?${category !== null ? `category=${category}` : ''}`
  )

  dispatch(setArticles(items))
}
