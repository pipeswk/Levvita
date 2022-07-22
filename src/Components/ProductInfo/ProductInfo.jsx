import React from 'react'
import styles from './ProductInfo.module.css';

const ProductInfo = ( { precio, comparativePrice } ) => {

    const price = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio);
    const oldPrice = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(comparativePrice);
    const ahorro = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(comparativePrice - precio);
    const discount = (comparativePrice - precio) / comparativePrice * 100;

  return (
    <>
        <p className='fw-bold fs-4'>Precio por tiempo limitado</p>
        <div className='d-flex gap-3'>
            <div>
                <p className='fw-bold fs-4'>{price}</p>
            </div>
            <div>
                <p className='fw-bold fs-4 text-decoration-line-through text-danger'>{oldPrice}</p>
            </div>
        </div>
        <div className={`${styles.ahorro}`}>
            <div>{`Te ahorras ${ahorro} | ${discount.toFixed(0)}% OFF 🤑`}</div>
        </div>
    </>
  )
}

export default ProductInfo