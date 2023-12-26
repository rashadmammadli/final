import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import BackToTop from '../UI/BackToTop'


const Layout = () => {
  return (
    
    <>
    <Header />
    <div>
        <Routers />
    </div>
    <Footer />
    <BackToTop />
    </>

  )
}

export default Layout