import React from 'react'
import styles from './ProductSizeSelector.module.css'

const ProductSizeSelector = ( { size, selectSize, setSelectSize } ) => {

    const handleClick = () => {
        setSelectSize(size)
    }

  return (
    <div className='mx-2 d-flex-none' role='button' onClick={handleClick}>
      <p
        className={size === selectSize ? styles.img_active : styles.img}
      >
        {size}
      </p>
    </div>
  )
}

export default ProductSizeSelector