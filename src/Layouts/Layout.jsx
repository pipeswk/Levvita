import React from 'react'
import Head from 'next/head'
import InfoBar from '../Components/InfoBar/InfoBar'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'

const Layout = ( { children, pagina } ) => {
  return (
    <div>
        <Head>
            <title>{`Levvita - ${pagina}`}</title>
            <meta name="description" content="Tenis y Zapatos" />
            <meta name="theme-color" content="#000428" /> 
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <InfoBar />
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout