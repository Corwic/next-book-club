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




export const showDetails = ( id ) => {
  const dispatch = useDispatch()
  dispatch( toggleSideScreen( id ) )
}


export const { toggleSideScreen } = commonSlice.actions

export default commonSlice.reducer
