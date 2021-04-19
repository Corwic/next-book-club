import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

//import { fetchReaders, addReader, killReader } from './store'
//const server = process.env.NEXT_PUBLIC_API // mongoDB
const server = '/api/' // mongoose


export async function fetchReaders(dispatch, getState) {
  const response = await axios.get(`${server}readers`)
  dispatch({ type: 'READERS_LOADED', payload: response.data.data })
}

function addReader( readerData ) {
  return async function addReaderThunk( dispatch, getState ) {
    const initialReader = { name: readerData }
    const response = await axios.post( `${server}readers`, initialReader )
    dispatch({ type: 'READER_ADDED', payload: response.data.data })
  }
}

function killReader( id ) {
  return async function killReaderThunk( dispatch, getState ) {
    const response = await axios.delete( `${server}readers/${id}` )
    dispatch({ type: 'READER_DELETED', payload: response, id })
  }
}

export default function readersSlice() {
  const allreaders = useSelector((state) => state.readers)
  const readers = useMemo(() => allreaders, [ allreaders ] )
  const dispatch = useDispatch()

  const addR = ( inputValue, resetInput ) => {
    dispatch( addReader( inputValue ) )
    resetInput('')
  }

  const killR = ( id ) => {
    dispatch( killReader( id ) )
  }

  return { readers, addR, killR }
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
