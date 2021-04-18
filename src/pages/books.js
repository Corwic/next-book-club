import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'

import { useDispatch } from 'react-redux'
import booksSlice, { fetchBooks } from '../redux/booksSlice'
import { connectToDatabase } from '../utils/mongodb'


export default function Books( { books } /*{ booksData }*/ ) {
  const dispatch = useDispatch()
  //const { books } = booksSlice()

  useEffect(() => {
    dispatch( fetchBooks )
  }, [])

  return (
    <Layout>
      <Head>
        <title>BOOKS — Book Club App</title>
      </Head>
      <List data={ books } type="books" filter='reading' />
      <List data={ books } type="books" filter='toRead' input />
      <List data={ books } type="books" filter='read' />
    </Layout>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const books = await db
    .collection("books")
    .find({})
    .limit(20)
    .toArray();
  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}

/*export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}*/



/*
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch( process.env.NEXT_PUBLIC_API + 'books' )
  const booksData = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      booksData,
    },
  }
}
*/
