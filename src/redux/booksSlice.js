import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

//import { fetchBooks, addBook, killBook } from './store'
const server = process.env.NEXT_PUBLIC_API

export async function fetchBooks(dispatch, getState) {
  const response = await axios.get(`${server}books`)
  dispatch({ type: 'BOOKS_LOADED', payload: response.data })
}

function addBook( bookData ) {
  return async function addBookThunk( dispatch, getState ) {
    const initialBook = { title: bookData }
    const response = await axios.post( `${server}books`, initialBook )
    dispatch({ type: 'BOOK_ADDED', payload: response.data})
  }
}

function killBook( id ) {
  return async function killBookThunk( dispatch, getState ) {
    const response = await axios.delete( `${server}books/${id}` )
    dispatch({ type: 'BOOK_DELETED', payload: response, id })
  }
}

export default function booksSlice() {
  const allbooks = useSelector((state) => state.books)
  const books = useMemo(() => allbooks, [ allbooks ] )
  const dispatch = useDispatch()

  const add = ( inputValue, resetInput ) => {
    dispatch( addBook( inputValue ) )
    resetInput('')
  }

  const kill = ( id ) => {
    dispatch( killBook( id ) )
  }

  return { books, add, kill }
}

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
