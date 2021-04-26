import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

//const server = process.env.NEXT_PUBLIC_API // mongoDB
const server = '/api/' // mongoose


export async function fetchBooks(dispatch, getState) {
  const response = await axios.get(`${server}books`)
  console.log('axios', response);
  dispatch({ type: 'BOOKS_LOADED', payload: response.data.data })

}

function addBook( bookData ) {
  return async function addBookThunk( dispatch, getState ) {
    const initialBook = { author_n_title: bookData }
    const response = await axios.post( `${server}books`, initialBook )
    console.log('axios add', response.data.data)
    dispatch({ type: 'BOOK_ADDED', payload: response.data.data })
  }
}

function killBook( id ) {
  return async function killBookThunk( dispatch, getState ) {
    const response = await axios.delete( `${server}books/${id}` )
    dispatch({ type: 'BOOK_DELETED', payload: response, id })
  }
}

export function booksSlice() {
  const allbooks = useSelector((state) => state.books)
  const books = useMemo(() => allbooks, [ allbooks ] )
  const dispatch = useDispatch()

  const addB = ( inputValue, resetInput ) => {
    dispatch( addBook( inputValue ) )
    resetInput('')
  }

  const kill = ( id ) => {
    dispatch( killBook( id ) )
  }

  return { books, addB, kill }
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
