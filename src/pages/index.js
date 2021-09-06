import Head from 'next/head'
import { PrivateRouteCheck } from '../auth'

// Here you would fetch and return the user

export default function Home() {

  return  (
    <>
      <Head>
        <title>Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivateRouteCheck />
      <div id='book-list'>
        Welcome
      </div>
    </>
  )
}
