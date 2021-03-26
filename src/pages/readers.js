import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Readers() {

  return (
    <Layout>
      <Head>
        <title>READERS — Book Club App</title>
      </Head>
      <div id='readers-list'>

      </div>
    </Layout>
  )
}
