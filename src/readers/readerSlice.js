import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const server = '/api/'

export const fetchReaders = createAsyncThunk(
  'readers/fetch',
  async () => {
    console.log('async');
    const response = await axios.get(`/api/readers`)
    console.log('response', response);
    return response.data.data;
  }
)



export const readerSlice = createSlice({
  name: 'readers',
  initialState: [],
/*  reducers: {
    loadReaders: (state) => {

    },
    addReader: (state) => {

    },
    killReader: (state) => {

    }
  },*/
  extraReducers: (builder) => {
    builder
      .addCase(fetchReaders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReaders.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchReaders.rejected, (state, action) => {
        console.log('rejected');
        console.log(state);
        console.log(action);
        //state.status = 'rejected';
        //state.value = action.payload;
      });
  }
})



export const { loadReaders, addReader, killReader } = readerSlice.actions

export default readerSlice.reducer

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
