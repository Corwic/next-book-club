import { useState } from 'react'
import styled from 'styled-components'
import { bookSlice } from './bookSlice'
//import { showDetails } from '../common/commonSlice'
import { useDispatch } from 'react-redux'
import { toggleSideScreen } from '../common/commonSlice'


const BookCardStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;

  span {
    flex-grow: 1;
  }
  button {
    background: transparent;
    border: none;
  }
`

export function BookCard ({ data: book }) {
  const { kill } = bookSlice()
  const [ isFocused, setIsFocused ] = useState('')
  const dispatch = useDispatch()

  const toggleSide = ( id ) => {
    console.log('isFocused=', isFocused, 'id', id);
    if ( isFocused === id ) {
      dispatch( toggleSideScreen( '' ) )
      setIsFocused( '' )
      return
    }
    dispatch( toggleSideScreen( id ) )
    setIsFocused( id )
  }

  return (
  <BookCardStyle onClick = {() => toggleSide( book._id )}>
    <span>
    {!book.title
        ? <>{ book.author_n_title }</>
        : <>{ book.author } — <strong>{ book.title }</strong></>
    }
    </span>
    <button onClick = {(event) => { kill( book._id, event ) }}> × </button>
  </BookCardStyle>
)}
