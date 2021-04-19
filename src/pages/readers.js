import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'

import { useDispatch, useSelector } from 'react-redux'
import readersSlice, { fetchReaders } from '../redux/readersSlice'

import dbConnect from '../utils/dbConnect'
import Reader from '../models/Reader'

export default function Readers(/*{ readers }*/) {
  const dispatch = useDispatch()
  const readers = useSelector( state => state.readers )

  //const [ inputValue, setInputValue ] = useState( '' )

  useEffect(() => {
    dispatch( fetchReaders )
  }, [])

  /*const { addItem } = usePost( inputValue, 'readers' )*/

/*  useEffect(() => {
      if ( !addItem ) return
      Router.reload()
  }, [ addItem ])*/

  return (
    <Layout>
      <Head>
        <title>READERS — Book Club App</title>
      </Head>
      <List data={ readers } type="readers" input />
    </Layout>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Reader.find({})
  const readers = result.map((doc) => {
    const reader = doc.toObject()
    reader._id = reader._id.toString()
    return reader
  })

  return { props: { readersD: readers } }
/*
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
  }*/
}
