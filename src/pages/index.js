import Head from 'next/head'
import Link from 'next/dist/client/link'
import { isPageAuthed } from '../auth'

// Here you would fetch and return the user

export default function Home({user}) {

  return  (
    <>
      <Head>
        <title>Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='book-list'>
        <p>Welcome {user ? user.uid : null}</p>
        {!user ?
          <p>Please <Link href="/signin">sign in</Link></p>
          : null
        }
      </div>
    </>
  )
}

Home.isAuthed = isPageAuthed
