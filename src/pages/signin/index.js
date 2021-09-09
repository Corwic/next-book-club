// https://firebase.google.com/docs/auth/web/password-auth#web-version-9
// https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0


import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Head from 'next/head'
import { Layout, SelectClub } from '../../common';
import axios from 'axios';

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



export default function SignInPage() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [signInError, setSignInError] = useState('')
  const [clubs, setClubs] = useState('')
  const auth = getAuth()
  const router = useRouter()
  const push = url => {router.push({pathname: url})}

  useEffect(() => {
    if ( clubs === '') return
    if ( clubs.length === 1) {
      router.push(`/${reader.clubs[0].slug}`)
    }
  }, [clubs])

  return (
    <Layout>
      <Head>
        <title>Sign in — Book Club App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Choose a way to sign in</h2>

      {signInError 
        ? <div><p>{signInError.message}</p></div>
        : null
      }
      
      {clubs?.length
        ? <SelectClub clubs={clubs} />
        : <>
          <ButtonsContainer>
            <input 
              type="text"
              value={emailValue}
              placeholder="Email address"
              onChange={e => setEmailValue(e.target.value)} />
            <input 
              type="password"
              value={passwordValue}
              placeholder="Password"
              onChange={e => setPasswordValue(e.target.value)} />
            <button
              onClick={onSignIn}>Sign in</button>
          </ButtonsContainer>

          <ButtonsContainer>
              <p></p>
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
          </>
      }
      
    </Layout>
  )

  async function onSignIn() {
    try {
      const { user } = await signInWithEmailAndPassword(auth, emailValue, passwordValue)
      const reader = await getReadersClubs(user.uid)
      console.log('reader', reader);
      setClubs(reader.clubs)
    } catch (e) {
      setSignInError(e)
    }
  }
}



async function getReadersClubs(uid) {
  const res = await axios(`http://localhost:3003/api/readers/${uid}`)
  return res.data.data
}