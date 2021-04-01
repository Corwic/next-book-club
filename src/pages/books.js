import React, { useState, useEffect } from 'react'
import usePost from '../hooks/usePost'

import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'


export default function Books({ booksData }) {
  const [ inputValue, setInputValue ] = useState( '' )
  const { addItem } = usePost( inputValue, 'books' )

  useEffect(() => {
      if ( !addItem ) return
      Router.reload()
  }, [ addItem ])

  return (
    <Layout>
      <Head>
        <title>BOOKS — Book Club App</title>
      </Head>
      <List data={ booksData } type="books" filter='reading' />
      <List data={ booksData } type="books" filter='toRead' input
        onAdd={ setInputValue } />
      <List data={ booksData } type="books" filter='read' />
    </Layout>
  )
}

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
