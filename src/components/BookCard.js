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
      <strong>{book.title}</strong> — {book.author?.name}
    </span>
    <button onClick = { () => kill( book.id ) }> × </button>
  </BookCardStyle>
)}
