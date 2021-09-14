import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { getAuth, signOut } from "firebase/auth"
import { useSelector, useDispatch } from 'react-redux'
import { authSignIn, authSignOut } from '../common/commonSlice'


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

export const NavBar = ({isAuthed}) => {
    //const { authUser, authLoading } = useSelector( state => state.common )
    const { push, pathname, query: { clubname } } = useRouter()
    const auth = getAuth();
    //const dispatch = useDispatch()


    const signOutF = async () => {
        try { 
          await signOut(auth)
          //dispatch( authSignOut() )
          //push('/signin')
        } catch (e) {
          console.log(e.message)
        }
    }

    if (!isAuthed) return (
        <nav>
            <ul>
            <NavBtn>
                <SignOut onClick={signOutF}>
                    <Link href={`/signin`}>
                        Sign in
                    </Link>
                </SignOut>
            </NavBtn>
            </ul>
        </nav> 
    )

    return (
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
    )
}