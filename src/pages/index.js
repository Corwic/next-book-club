import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='book-list'>
        
      </div>
    </Layout>
  )
}