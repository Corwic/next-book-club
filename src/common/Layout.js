import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideScreenContent from './SideScreenContent'

import { useSelector, useDispatch } from 'react-redux'
import { toggleSideScreen } from '../common/commonSlice'


export const Layout = ({ children, isAuthed }) => {
  const { sideScreenContent, id } = useSelector( state => state.common )
  const dispatch = useDispatch()
  const [ isOpen, setIsOpen ] = useState( sideScreenContent )

  useEffect(() => {
    setIsOpen( sideScreenContent )
    console.log( 'sideScreenContent', isOpen);
  }, [sideScreenContent] )

  const closeSideScreen = () => {
    dispatch( toggleSideScreen() )
    setIsOpen( '' )
  }

  return (
    <div className="wrapper">
      <div className="screen hiddenscreen"></div>
      <div className={'screen mainscreen' + ( isOpen ? ' show': '')}>
        <Header isAuthed={isAuthed}/>
          <main>
            {children}
          </main>
        <Footer />
      </div>
      <div className = {`screen sidescreen` + ( isOpen ? ' show' : '' ) }>
        <button onClick = {() => closeSideScreen()}>×</button>
        <SideScreenContent type={ sideScreenContent } id={ id }/>
      </div>
    </div>
  )
}

// import styled from 'styled-components'

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
