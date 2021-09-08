import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import { Layout } from '../common'


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

export default function CreateAnAccount() {
  const router = useRouter()
  const push = url => {router.push({pathname: url})}

  return (
    <Layout>
      <Head>
        <title>Create an account — Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Choose a way to log in</h2>      
      <ButtonsContainer>
          <SignInButton className="disabled">Facebook</SignInButton>
          <SignInButton className="disabled">Google</SignInButton>
      </ButtonsContainer>
    </Layout>
  )
}
