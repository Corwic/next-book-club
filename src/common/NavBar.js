import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { getAuth, signOut } from "firebase/auth";

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

export const NavBar = () => {
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

    console.log('auth.currentUser', auth.currentUser);

    return (!auth.currentUser ? null :
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