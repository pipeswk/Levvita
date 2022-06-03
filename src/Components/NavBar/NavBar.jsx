import React from 'react'
import MenuHamburguer from '../MenuHamburguesa/MenuHamburguer'
import Logo from '../Logo/Logo'
import styles from './NavBar.module.css'
import Carrito from '../Carrito/Carrito'
import MenuTexto from '../MenuTexto/MenuTexto'

const NavBar = () => {
  return (
    <nav className={`${styles.navBar} navbar navbar-expand-lg`} >
        <div className="container-fluid mx-2">
            <MenuHamburguer />
            <Logo />
            <MenuTexto />
            <Carrito />
        </div>
    </nav>
  )
}

export default NavBar