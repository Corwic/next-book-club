import React, { useState } from 'react'
import styled from 'styled-components';
import booksSlice from '../redux/booksSlice'


const InputStyle = styled.input`
  width: 100%;
  border: 2px black solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: .5rem;

  &:focus {
    outline: 0;
    filter: drop-shadow(0 .2rem 0 black);
    transform: translateY(-2px);
    /*transition: filter .5s, transform .5s;*/
  }
`;

export default function Input({ placeholder, inputString = f=>f }) {
  const [ inputValue, setInputValue ] = useState('')
  const { add } = booksSlice()

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
