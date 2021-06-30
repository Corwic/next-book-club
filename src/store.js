//import { useMemo } from 'react'
//import { createStore, applyMiddleware, combineReducers } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { bookReducer } from './books/bookSlice'
import { readerReducer } from './readers/readerSlice'




const store = configureStore({
  reducer: {
    books: bookReducer,
    readers: readerReducer
  }
})

export default store

/*
const initialState = {
  books: [],
  readers: [],
  clubs: []
}

const bookReducers = (state = [], action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return action.payload
      break;
    case 'BOOK_ADDED':
      return [ ...state.books, action.payload ]
      break;
    case 'BOOK_DELETED':
      console.log('state', state.books);
      const i = state.books.findIndex(book => book._id === action.id)
      if ( action.payload.status !== 200 ) return { ...state }
      return [ ...state.books.slice( 0, i ),
                 ...state.books.slice( i + 1 ) ]
      break;
    default:
      return state
      break;
  }
}
const readerReducers = (state = [], action) => {
  switch (action.type) {
    case 'READERS_LOADED':
      return action.payload
      break;
    case 'READER_ADDED':
      return  [ ...state.readers, action.payload ]
      break;
    case 'READER_DELETED':
      const j = state.readers.findIndex(reader => reader._id === action.id)
      if ( action.payload.status !== 200 ) return { ...state }
      return [ ...state.readers.slice( 0, j ),
               ...state.readers.slice( j + 1 ) ]

      break;
    default:
      return state
      break;
  }
}

const rootReducer = combineReducers({ books: bookReducers, readers: readerReducers })

function initStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
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
*/
