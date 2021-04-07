import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'

import books from './books'
import readers from './readers'

const reducer = combineReducers({ books, readers/*, router: routerReducer */})

export default reducer
