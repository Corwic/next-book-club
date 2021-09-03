import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../common/Layout'
import styled from 'styled-components'

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

export default function Login() {
  const router = useRouter()
  const push = url => {router.push({pathname: url})}

  return (
    <Layout>
      <Head>
        <title>Sign in — Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h2>Select a club</h2>      
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
