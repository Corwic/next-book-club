import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'


//const server = process.env.NEXT_PUBLIC_API // mongoDB
const server = '/api/' // mongoose

const loadBooksAction = createAction('books/load')
const addBookAction = createAction('books/add')
const killBookAction = createAction('books/kill')

export const bookReducer = createReducer( [], builder => {
  builder
    .addCase(loadBooksAction, ( state, action ) => {
      return action.payload
    })
    .addCase(addBookAction, ( state, action ) => {
      console.log(state);
      state.push( action.payload )
    })
   .addCase(killBookAction, ( state, action ) => {
      if ( action.payload.response.status !== 200 ) return state
      const i = state.findIndex(book => book._id === action.payload.id)
      return state = [ ...state.slice( 0, i ),
                      ...state.slice( i + 1 ) ]
    })
})



export function bookSlice() {
  const allbooks = useSelector((state) => state.books)
  const books = useMemo(() => allbooks, [ allbooks ] )
  const dispatch = useDispatch()

  const loadBs = () => {
    dispatch( loadBooks() )
  }

  const addB = ( inputValue, resetInput ) => {
    dispatch( addBook( inputValue ) )
    resetInput('')
  }

  const kill = ( id ) => {
    dispatch( killBook( id ) )
  }

  return { books, addB, kill, loadBs }
}

function loadBooks() {
  return async function fetchBooks( dispatch ) {
    const response = await axios.get(`${server}books`)
    dispatch(loadBooksAction(response.data.data))
    //dispatch({ type: 'BOOKS_LOADED', payload: response.data.data })
  }
}

function addBook( bookData ) {
  return async function ( dispatch ) {
    const initialBook = { author_n_title: bookData }
    const response = await axios.post( `${server}books`, initialBook )
    dispatch(addBookAction( response.data.data ))
  }
}

function killBook( id ) {
  return async function ( dispatch ) {
    const response = await axios.delete( `${server}books/${id}` )
    dispatch(killBookAction({ response, id }))
  }
}

/*export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return action.payload
      break;
    case 'BOOK_ADDED':
      return [ ...state, action.payload ]
      break;
    case 'BOOK_DELETED':
      console.log('action', action);
      console.log('state', state);
      const i = state.findIndex(book => book._id === action.payload.id)
      if ( action.payload.response.status !== 200 ) return { ...state }
      return [ ...state.slice( 0, i ),
                 ...state.slice( i + 1 ) ]
      break;
    default:
      return state
      break;
  }
}*/

/*
// from ————> https://javascript.plainenglish.io/redux-thunk-vs-redux-saga-8c93fc822de
export const fetchTasksStarted = () => ({
  type:  "FETCH_TASKS_START"
});
export const fetchTasksSuccess = tasks => ({
  type: "FETCH_TASKS_SUCCESS",
  payload: tasks
});
export const fetchTasksError = errorMessage => ({
  type: "FETCH_TASKS_ERROR",
  payload: errorMessage
});
const fetchTasks =  () => async dispatch => {
    dispatch(fetchTasksStarted())
    try{
        const TaskResponse = await fetch("API URL")
const task = await taskResponse.json()
        dispatch(fetchTasksSuccess(tasks))
    }catch(exc){
        dispatch(fetchTasksError(error.message))
    }
}*/
