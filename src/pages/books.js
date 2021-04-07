import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'

import { useDispatch } from 'react-redux'
import booksSlice, { fetchBooks } from '../redux/booksSlice'



export default function Books(/*{ booksData }*/) {
  const dispatch = useDispatch()
  const { books } = booksSlice()

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
