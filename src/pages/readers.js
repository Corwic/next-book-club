import React, { useState, useEffect } from 'react'
import usePost from '../hooks/usePost'

import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'

export default function Readers({ readersData }) {
  const [ inputValue, setInputValue ] = useState( '' )
  const { addItem } = usePost( inputValue, 'readers' )

  useEffect(() => {
      if ( !addItem ) return
      Router.reload()
  }, [ addItem ])

  return (
    <Layout>
      <Head>
        <title>READERS — Book Club App</title>
      </Head>
      <List data={ readersData } type="readers" input
        onAdd={ setInputValue }/>
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch( process.env.NEXT_PUBLIC_API + 'readers' )
  const readersData = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      readersData,
    },
  }
}
