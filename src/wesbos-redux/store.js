/*import { createStore, compse } from 'redux'
//import { syncHistoryWithStore } from 'react-router-redux'
//import { browserHistory } from 'react-router'

// import the root reduser
import rootReducer from './r-reducers/index'

import { books, readers } from './data/db'

// create an object for the default booksData
const defaultState = {
  books,
  readers
}

const store = createStore(rootReducer, defaultState)
//export const history = syncHistoryWithStore(browserHistory, store)
export default store
*/


import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import the root reduser
import reducer from './r-reducers/index'
// bookData
import { books, readers } from './data/db'


let store

const initialState = {
  books,
  readers
}



function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
