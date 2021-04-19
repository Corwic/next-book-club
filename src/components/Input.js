import React, { useState } from 'react'
import styled from 'styled-components';
import booksSlice from '../redux/booksSlice'
import readersSlice from '../redux/readersSlice'


const InputStyle = styled.input`
  width: 100%;
  border: 2px grey solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: .5rem;

  &:focus {
    outline: 0;
    border-color: black;
    filter: drop-shadow(0 .2rem 0 black);
    transform: translateY(-2px);
    /*transition: filter .5s, transform .5s;*/
  }
`;

export default function Input({ placeholder, inputString = f=>f, type }) {
  const [ inputValue, setInputValue ] = useState('')
  const { addB } = booksSlice()
  const { addR } = readersSlice()
  const add = type === 'books' ? addB : addR

  const handleKeyDown = e => {
    if (e.key ==='Enter') {
      //console.log(`Value is: ${ inputValue }`);
      add( inputValue, setInputValue )
      //setInputValue('')
    }
  }
  return  <InputStyle
            type = "text"
            placeholder = { placeholder }
            value = { inputValue }
            onChange = { e => setInputValue(e.target.value) }
            onKeyDown = { handleKeyDown }
          />

}
