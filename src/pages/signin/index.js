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
    <h2>Choose a way to log in</h2>      
    <ButtonsContainer>
        <SignInButton className="disabled">Facebook</SignInButton>
        <SignInButton className="disabled">Google</SignInButton>
        <p></p>
        <SignInButton 
            className="disabled"
            onClick={()=>push("/create/an-account")}>
            Create an account
        </SignInButton>
        <p></p>
        <button onClick={()=>push("/dostlug")}>DOS(tl)UG</button>
        <button onClick={()=>push("/demo")}>Demo Club</button>
    </ButtonsContainer>
    </Layout>
  )
}
