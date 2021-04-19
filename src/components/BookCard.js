import styled from 'styled-components'
import booksSlice from '../redux/booksSlice'


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
export default function BookCard ({ data: book }) {
  const { kill } = booksSlice()

  return (
  <BookCardStyle>
    <span>
    {!book.title
        ? <>{ book.author_n_title }</>
        : <>{ book.author } — <strong>{ book.title }</strong></>
    }
    </span>
    <button onClick = { () => kill( book._id ) }> × </button>
  </BookCardStyle>
)}
