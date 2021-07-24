import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { createAction, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'


//const server = process.env.NEXT_PUBLIC_API // mongoDB
const server = '/api/' // mongoose

//const loadBooksAction = createAction('books/load')
const loadBooksAction = createAsyncThunk( 'books/load',
  async (props, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${server}books`)
      return response.data.data
    } catch (err) {
      let error = error
      if (!error.response) throw err
      return rejectWithValue(error.response.data)
    }
  }
)
const addBookAction = createAsyncThunk( 'books/add',
  async ( bookData, { rejectWithValue }) => {
    try {
      const initialBook = { author_n_title: bookData }
      const response = await axios.post( `${server}books`, initialBook )
      return response.data.data
    } catch (err) {
      let error = error
      if (!error.response) throw err
      return rejectWithValue(error.response.data)
    }
  }
)
const killBookAction = createAsyncThunk( 'books/kill',
  async ( id, { rejectWithValue }) => {
    try {
      const response = await axios.delete( `${server}books/${id}` )
      return { status: response.status, id }
    } catch (err) {
      let error = error
      if (!error.response) throw err
      return rejectWithValue(error.response.data)
    }
  }
)

export const bookReducer = createReducer( [], builder => {
  builder
    .addCase(loadBooksAction.fulfilled, ( state, { payload } ) => {
      return payload
    })
    .addCase(loadBooksAction.rejected, ( state, action ) => {
      console.log('oooo', action.payload || action.error);
      return state
    })
    .addCase(addBookAction.fulfilled, ( state, { payload } ) => {
      state.push( payload )
    })
   .addCase(killBookAction.fulfilled, ( state, { payload } ) => {
      console.log('action', payload);
      if ( payload.status !== 200 ) return state
      const i = state.findIndex(book => book._id === payload.id)
      return state = [ ...state.slice( 0, i ),
                      ...state.slice( i + 1 ) ]
    })
})


export function bookSlice() {
  const allbooks = useSelector((state) => state.books)
  const books = useMemo(() => allbooks, [ allbooks ] )
  const dispatch = useDispatch()

  const loadBooks = () => {
    dispatch( loadBooksAction() )
  }

  const addBook = ( inputValue, resetInput ) => {
    dispatch( addBookAction( inputValue ) )
    resetInput('')
  }

  const kill = ( id, event ) => {
    event.stopPropagation()
    dispatch( killBookAction( id ) )
  }

  return { books, addBook, kill, loadBooks }
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
