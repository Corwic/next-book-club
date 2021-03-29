import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

/* In global.scss
  max-width: 411px;
  min-width: 320px;
  height: 80vh;
  background-color: white;

  margin: 10vh auto;
  border: 2px black solid;
  border-radius: 1rem;
  padding: .5rem 1rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  @media (max-width: 411px) {
    border: none;
    margin: 0 auto;
  }
`*/

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
}
