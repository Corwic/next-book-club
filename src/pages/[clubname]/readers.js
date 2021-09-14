import { useEffect } from 'react'
import { Layout, List } from '../../common'
import Head from 'next/head'

import { unwrapResult } from '@reduxjs/toolkit'

import { useDispatch, useSelector } from 'react-redux'
import { Reader, readerSlice, fetchReaders } from '../../readers'

export default function Readers(/*{ readers }*/) {
  const { readers, loadReaders } = readerSlice()

  useEffect(() => {
    loadReaders()
  }, [])


  return (
    <>
      <Head>
        <title>READERS — Book Club App</title>
      </Head>
      <List data={ readers } type="readers" input />
    </>
  )
}

Readers.isAuthed = isPageAuthed


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
