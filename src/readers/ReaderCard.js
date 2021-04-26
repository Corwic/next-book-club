import styled from 'styled-components'
import { readersSlice } from './readersSlice'

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
  const { killR } = readersSlice()

  return (
  <ReaderCardStyle>
    <span>{ reader.name }</span>
    <button onClick = { () => killR( reader._id ) }> × </button>
  </ReaderCardStyle>
)}
