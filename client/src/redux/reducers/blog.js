const articlesInitialState = {
  items: [],
  isLoaded: false,
}

const articleInitialState = {
  item: [],
  isLoaded: false,
}

const addCategoryName = data => {
  const obj = {}
  if (data.category.cat1) {
    obj.categoryName = 'Питание'
  }
  if (data.category.cat2) {
    obj.categoryName = 'Соревнования'
  }
  if (data.category.cat3) {
    obj.categoryName = 'Лагерь'
  }
  if (data.category.cat4) {
    obj.categoryName = 'Растяжка'
  }
  if (data.category.cat5) {
    obj.categoryName = 'Тренировки'
  }

  return Object.assign(data, obj)
}

const payloadTransform = data => {
  if (Array.isArray(data)) {
    return data.map(item => addCategoryName(item))
  }
  return addCategoryName(data)
}

const articles = (state = articlesInitialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        items: payloadTransform(action.payload),
        isLoaded: true,
      }
    case 'SET_SIMILAR_ARTICLES':
      return {
        ...state,
        items: payloadTransform(action.payload),
        isLoaded: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

const article = (state = articleInitialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLE_BY_ID':
      return {
        ...state,
        item: payloadTransform(action.payload),
        isLoaded: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export { articles, article }
