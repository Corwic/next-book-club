import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { getAuth, signOut } from "firebase/auth";

const HeaderStyle = styled.header`
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
  }
`;
const NavBtn = styled.li`
  letter-spacing: .02rem;
  ${props => props?.active
    ? `
      font-weight: 600;
      letter-spacing: initial;
      ` : ''}
`;
const SignOut = styled.a`
    cursor: pointer;
`



export default function Header() {
  const { push, pathname, query: { clubname } } = useRouter()
  const auth = getAuth();

  const signOutF = async () => {
    try { 
      await signOut(auth)
      push('/signin')
    } catch (e) {
      console.log(e.message)
    }
  }

    return (
        <HeaderStyle>
          <h1><Link href={`/${clubname ? clubname : null}`}>BOOK CLUB 
          {
          //clubname ? clubname : 'APP'
          }
          </Link></h1>

          <nav>
            <ul>
              <NavBtn key="1" className="oo" active={pathname === '/books' ? 'active' : ''}>
                <Link href={`/${clubname}/books`}>
                  Books
                </Link>
              </NavBtn>
              <NavBtn key="2" active={pathname === '/readers' ? 'active' : ''}>
                <Link href={`/${clubname}/readers`}>
                  Readers
                </Link>
              </NavBtn>
              <NavBtn>
                <SignOut onClick={signOutF}>
                  Sign out
                </SignOut>
              </NavBtn>
            </ul>
          </nav>
        </HeaderStyle>
    )
}
//{pathname === '/books' ? 'active' : ''}
//{pathname === '/readers' ? 'active' : ''}
