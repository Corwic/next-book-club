import React from 'react'
import styled from 'styled-components';
import key from 'weak-key'

import books from '../data/books.json'
import BookCard from './BookCard'
import ReaderCard from './ReaderCard'
import Input from './Input'


const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;

  li {
    border: 2px black solid;
    border-radius: .5rem;
    padding: 0 1rem .2rem; /* remove '1rem .2rem' when cards are developed */
    margin-bottom: .5rem;
  }
  h2 {
    font-size: 1rem;
    /*letter-spacing: .2rem;*/
    text-transform: uppercase;
  }
`;

const cardComponents = {
  books: BookCard,
  readers: ReaderCard
}
const lists = {
  books,
  readers: [{name: 'Anton'}]
}
const listNames = {
  toRead: 'To read list',
  read: 'Read',
  reading: 'Reading now',
  readers: 'Club members'
}
const conditions = {
  toRead: i => !i.club.votes,
  read: i => i.club.votes && !i.club.reading,
  reading: i => i.club.reading,
  all: i => i.name
}

export default function List({ type = 'books', filter = 'all', input }) {
  const Card = cardComponents[ type ]
  const listData = lists[ type ]
  const listHeader = type === 'books'
                      ? listNames[ filter ]
                      : listNames[ type ]
  const filterCondition = conditions[ filter ]
  console.log('filterCondition');
  console.log(filterCondition);
  return (
    <ListStyle>
      <h2>{ listHeader }</h2>
      {input
          ? <Input placeholder={`Add a ${type.slice(0, -1)}`}/>
          : ''
      }
      {listData.length
          ? listData.map(item => {
              if (filterCondition(item))
                return <li key={key(item)}><Card data={item} /></li>
            })
          : <p>There's no {type} yet</p>
      }
    </ListStyle>
  )
}
