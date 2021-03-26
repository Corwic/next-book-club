import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10vh auto;
  max-width: 411px;
  min-width: 320px;
  height: 80vh;
  border: 2px black solid;
  border-radius: 8px;
  padding: 16px;

  @media (max-width: 411px) {
    border: none;
    margin: 0 auto;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`


export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </Wrapper>
  )
}
