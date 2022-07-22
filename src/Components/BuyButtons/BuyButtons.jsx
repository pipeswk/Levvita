import React from 'react'
import styles from './BuyButtons.module.css'
const BuyButtons = () => {
  return (
    <div className='mt-3'>
        <button className={`${styles.buyButton} mb-2`}>COMPRAR AHORA - PAGAR AL RECIBIR</button>
        <button className={`${styles.cartButton} mt-2`}>AGREGAR AL CARRITO</button>
    </div>
  )
}

export default BuyButtons