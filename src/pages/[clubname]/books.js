import React, { useEffect } from 'react'
import Head from 'next/head'
import { Layout, List } from '../../common'
import { isPageAuthed } from '../../auth'


import { Book, bookSlice } from '../../books'
//import dbConnect from '../../utils/dbConnect'
//import { connectToDatabase } from '../utils/mongodb'


export default function Books() {
  //const books = useSelector( state => state.books )
  const { books, loadBooks } = bookSlice()
  console.log('bookspage', books);

  useEffect(() => {
    loadBooks()
  }, [])

  return (
    <>
      <Head>
        <title>BOOKS — Book Club App</title>
      </Head>

      <List data={ books } type="books" filter='reading' />
      <List data={ books } type="books" filter='toRead' input />
      <List data={ books } type="books" filter='read' />
    </>
  )
}

Books.isAuthed = isPageAuthed


// mogoose way getServerSideProps
/*export async function getServerSideProps() {
  await dbConnect()

  // find all the data in our database
  const result = await Book.find({})
  const books = result.map((doc) => {
    const book = doc.toObject()
    book._id = book._id.toString()
    return book
  })

  return { props: { booksD: books } }
}
*/

// mongoDB way
/*export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const books = await db
    .collection("books")
    .find({}) // .sort()
    .limit(20)
    .toArray();
  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}*/
