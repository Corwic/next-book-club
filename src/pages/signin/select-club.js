import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import { Layout } from '../../common'
import axios from 'axios'


const ButtonsContainer = styled.div`
    display: grid;
    grid-row-gap: 1rem;
`
const SignInButton = styled.button`
    background: none;
    border: solid 1px;
    &.disabled {
        color: grey;
        border-color: grey;
    }
`

export default function Login({ clubs }) {
  const router = useRouter()
  const push = url => {router.push({pathname: url})}

  console.log('clubs', clubs);
  
  const selectClub = () => {}

  //if (clubs.length === 1) router.push(`/${clubs[0].slug}`)

  return (
    <Layout>
      <Head>
        <title>Sign in — Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Select a club</h2>
    {clubs.length ? 
      <ul>{clubs.map(club => 
        <li key={club.slug}
            onClick={() => selectClub(club)}>
          {club.title}
        </li>)}
      </ul>
      : ''
    }
    <ButtonsContainer>
        <SignInButton 
            className="disabled"
            onClick={()=>push("/create/a-club")}
            >Create a new club
        </SignInButton>
    </ButtonsContainer>
    </Layout>
  )
}


export async function getStaticProps() {
  //try {
    const res = await axios('http://localhost:3003/api/clubs/')
    const clubs = await res.data.data
  // } catch (e) {
  //   console.error(e)
  // }

  return {
    props: {
      clubs,
    },
  };
}