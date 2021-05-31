import { combineReducers } from 'redux'

import merch from './merch'
import competitions from './competitions'

const rootReducer = combineReducers({ merch, competitions })

export default rootReducer
