import Link from 'next/link'
import styled from 'styled-components'
import { NavBar } from './NavBar' 
import { useRouter } from 'next/router';

const HeaderStyle = styled.header`
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
  }
`;


export default function Header() {
    const { query: {clubname} } = useRouter()
    const name = `BOOK CLUB ` + (clubname ? clubname : 'APP')

    return (
        <HeaderStyle>
          <h1><Link href={`/`}>
            {name}
          </Link></h1>
          <NavBar />
        </HeaderStyle>
    )
}
//{pathname === '/books' ? 'active' : ''}
//{pathname === '/readers' ? 'active' : ''}
