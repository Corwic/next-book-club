import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Books() {

  return (
    <Layout>
      <Head>
        <title>BOOKS — Book Club App</title>
      </Head>
      <div id='book-list'>

      </div>
    </Layout>
  )
}
