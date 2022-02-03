import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Sticky from 'react-sticky-el';

export const Layout = ({children}) => {
  return (
    <Container>
      <div style={{zIndex: 1, position: 'sticky'}} >
        <Sticky topOffset={790}>
          <Header/>
        </Sticky>
      </div>
      <div style={{zIndex: 1}}>
        <main>{children}</main> 
        <Footer/>
      </div>
    </Container>
  )
}
