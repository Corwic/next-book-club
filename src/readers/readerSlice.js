import { useSelector, useDispatch } from 'react-redux'
import { createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

const server = '/api/'

/*const handleError = fn => (...params) => fn(...params).catch( error => {
  if (!error.response) throw error
  return rejectWithValue(error.response.data)
})*/

/*const handleError = ( fn, rejectWithValue ) => () => {
  try { fn() } catch (err) {
    if (!error.response) throw error
    return rejectWithValue(error.response.data)
  }
}*/

const loadReadersAction = createAsyncThunk( 'readers/load',
  async ( props, { rejectWithValue }) => {
    const response = await axios.get(`${server}readers`)
    return response.data.data
  }
)
const addReaderAction = createAsyncThunk( 'readers/add',
  async ( readerData, { rejectWithValue }) => {
    const initialReader = { name: readerData }
    const response = await axios.post( `${server}readers`, initialReader )
    return response.data.data
  }
)
const killReaderAction = createAsyncThunk( 'readers/kill',
  async ( id, { rejectWithValue }) => {
    const response = await axios.delete( `${server}readers/${id}` )
    return { status: response.status, id }
  }
)
export const readerReducer = createReducer( [], builder => {
  builder
    .addCase(loadReadersAction.fulfilled, (state, { payload }) => {
      return payload
    })
    .addCase(loadReadersAction.rejected, (state, action) => {
      console.log('oooo', action.payload || action.error);
      return state
    })
    .addCase(addReaderAction.fulfilled, ( state, { payload } ) => {
      state.push( payload )
    })
    .addCase(killReaderAction.fulfilled, ( state, { payload } ) => {
      console.log('action', payload);
      if ( payload.status !== 200 ) return state
      const i = state.findIndex(reader => reader._id === payload.id)
      return state = [ ...state.slice( 0, i ),
                       ...state.slice( i + 1 ) ]
    })
})

export function readerSlice() {
  const readers = useSelector((state) => state.readers)
//  const readers = useMemo(() => allreaders, [ allreaders ] )
  const dispatch = useDispatch()

  const loadReaders = () => {
    dispatch( loadReadersAction() )
  }

  const addReader = ( inputValue, resetInput ) => {
    dispatch( addReaderAction( inputValue ) )
    resetInput('')
  }

  const killReader = ( id ) => {
    dispatch( killReaderAction( id ) )
  }

  return { readers, addReader, killReader, loadReaders }
}

/*export const readerS = createSlice({
  name: 'readers',
  initialState: [],
  reducers: {
    //loadReaders: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      //.addCase(handleError(loadReadersAction).pending, (state) => {
      //  state.status = 'loading';
      //})
      .addCase(loadReadersAction.fulfilled, (state, { payload }) => {
        return payload
      })
      .addCase(loadReadersAction.rejected, (state, action) => {
        console.log('oooo', action.payload || action.error);
        return state
      });
  }
})*/
//handleError(
/*export const readerReducer = readerS.reducer*/



//export const { loadReaders, addReader, killReader } = readerSlice.actions



/*
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

export function readersSlice() {
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
*/
