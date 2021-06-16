import styled from 'styled-components'
import {
  loadReaders,
  addReader,
  killReader,
} from './readerSlice'

const ReaderCardStyle = styled.div`
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
export function ReaderCard ({ data: reader }) {

  return (
  <ReaderCardStyle>
    <span>{ reader.name }</span>
    <button onClick = { () => killReader( reader._id ) }> × </button>
  </ReaderCardStyle>
)}
