import { useDispatch } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
  name: 'common',
  initialState: { sideScreenContent: '' },
  reducers: {
    toggleSideScreen( state, { payload }) {
      return state = { sideScreenContent: payload }
    }
  }
})






export const { toggleSideScreen } = commonSlice.actions

export function commonFunctions() {
  const dispatch = useDispatch()

  const toggleSideScreenFn = ( id ) => {
    dispatch( toggleSideScreen( id ) )
  }

  return { toggleSideScreenFn }
}


export default commonSlice.reducer
