import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

let store

const initialState = {
  books: [],
  readers: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload
      }
    case 'BOOK_ADDED':
      return {
        ...state,
        books: [ ...state.books, action.payload ]
      }
    case 'BOOK_DELETED':
      const i = state.books.findIndex(book => book.id === action.id)
      if ( action.payload.status !== 200 ) return { ...state }
      return {
        ...state,
        books: [ ...state.books.slice( 0, i ),
                 ...state.books.slice( i + 1 ) ]
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware( thunk ))
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
