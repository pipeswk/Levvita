import React from 'react'
import styles from './ProductInputQ.module.css'

const ProductInputQ = () => {
  return (
    <>
        <h2>Cantidad:</h2>
        <input
            type='number'
            className={`${styles.cantidad} form-control`}
            placeholder='Cantidad'
            min='1'
            step='1'
        />
    </>
  )
}

export default ProductInputQ