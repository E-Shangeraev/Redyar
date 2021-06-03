import { combineReducers } from 'redux'

import merch from './merch'
import competitions from './competitions'
import filter from './filter'
import { articles, article } from './blog'

const rootReducer = combineReducers({
  merch,
  competitions,
  articles,
  article,
  filter,
})

export default rootReducer
