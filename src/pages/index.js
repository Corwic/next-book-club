import Head from 'next/head'
import Link from 'next/dist/client/link'
import { Layout } from '../common'

// Here you would fetch and return the user

export default function Home() {

  return  (
    <Layout>
      <Head>
        <title>Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='book-list'>
        <p>Welcome</p>
        <Link href="/signin">Sign in</Link>
      </div>
    </Layout>
  )
}
