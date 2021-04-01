import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/List'


export default function Books({ booksData }) {
  console.log('booksData');
  console.log(booksData);
  return (
    <Layout>
      <Head>
        <title>BOOKS — Book Club App</title>
      </Head>
      <List data={booksData} type="books" filter='reading' />
      <List data={booksData} type="books" filter='toRead' input />
      <List data={booksData} type="books" filter='read' />
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:4003/books')
  const booksData = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      booksData,
    },
  }
}
