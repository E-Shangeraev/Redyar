import { combineReducers } from 'redux'

import merch from './merch'
import competitions from './competitions'
import filter from './filter'
import articles from './articles'

const rootReducer = combineReducers({ merch, competitions, articles, filter })

export default rootReducer
