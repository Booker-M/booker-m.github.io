import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Sticky from 'react-sticky-el';

export const Layout = ({children}) => {
  return (
    <Container>
      <div style={{zIndex:999, position: 'sticky'}}>
        <Sticky topOffset={780}>
          <Header/>
        </Sticky>
      </div>
        <main>{children}</main> 
        <Footer/>
    </Container>
  )
}
