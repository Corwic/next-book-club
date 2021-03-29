import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'


export default function Books() {
  return (
    <Layout>
      <Head>
        <title>BOOKS — Book Club App</title>
      </Head>
      <List type="books" filter='reading' />
      <List type="books" filter='toRead' input />
      <List type="books" filter='read' />
    </Layout>
  )
}
