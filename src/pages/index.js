import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../common/Layout'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Home() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/signin')
    }
  }, [user, loading])

  return  (
    <Layout>
      <Head>
        <title>Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!(user || loading) 
        ? <p>Redirecting</p>
        : <div id='book-list'>
          </div>
      }

    </Layout>
  )
}
