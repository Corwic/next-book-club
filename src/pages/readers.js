import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'

export default function Readers({ readersData }) {

  return (
    <Layout>
      <Head>
        <title>READERS — Book Club App</title>
      </Head>
      <List data={ readersData } type="readers" input />
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:4003/readers')
  const readersData = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      readersData,
    },
  }
}
