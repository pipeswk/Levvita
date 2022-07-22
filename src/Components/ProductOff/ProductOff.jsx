import React from 'react'
import styles from './ProductOff.module.css'

const ProductOff = () => {
  return (
    <div className={`${styles.offBox} position-relative`}>
        <span className={`${styles.badge} position-absolute top-0 start-0 translate-middle badge rounded-pill`}>
            OFERTA 1
        </span>
        <div className='container'>
            <div className='row gap-0'>
                <div className={`${styles.text} d-block col-7 text-center`}>
                    Lleva <span>{`2`}</span> por
                    <div className={`${styles.smallText}`}>Precio por par</div>
                </div>
                <div className={`${styles.price} d-block col-5`}>
                    {`$109.900`}
                    <div className={`${styles.oldPrice} text-decoration-line-through`}>{`$119.900`}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductOff