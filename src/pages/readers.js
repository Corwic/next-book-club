import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'

export default function Readers() {

  return (
    <Layout>
      <Head>
        <title>READERS — Book Club App</title>
      </Head>
      <List type="readers" input />
    </Layout>
  )
}
