import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'


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



export default function Header() {
  const { pathname } = useRouter()
  //console.log( pathname );
    return (
        <HeaderStyle>
          <h1><Link href="/">BOOK CLUB ДОС(ТЛ)УГ</Link></h1>
          <nav>
            <ul>
              <NavBtn key="1" className="oo" active={pathname === '/books' ? 'active' : ''}>
                <Link href="/books">
                  Books
                </Link>
              </NavBtn>
              <NavBtn key="2" active={pathname === '/readers' ? 'active' : ''}>
                <Link href="/readers">
                  Readers
                </Link>
              </NavBtn>
            </ul>
          </nav>
        </HeaderStyle>
    )
}
//{pathname === '/books' ? 'active' : ''}
//{pathname === '/readers' ? 'active' : ''}
