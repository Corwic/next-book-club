import { useDispatch } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sideScreenContent: '',
    authUser: null,
    authLoading: true
}


export const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    toggleSideScreen( state, { payload }) {
      return state = { ...state, sideScreenContent: payload }
    },
    authSignIn( state, { payload }) {
      return state = { ...state, authUser: payload, authLoading: false}
    },
    authSignOut( state ) {
      return state = { ...state, authUser: null, authLoading: false}
    }
  }
})






export const { toggleSideScreen, authSignIn, authSignOut } = commonSlice.actions

export function commonFunctions() {
  const dispatch = useDispatch()

  const toggleSideScreenFn = ( id ) => {
    dispatch( toggleSideScreen( id ) )
  }

  return { toggleSideScreenFn }
}


export default commonSlice.reducer
