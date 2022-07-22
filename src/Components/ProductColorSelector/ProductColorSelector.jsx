import React from 'react'
import styles from './ProductColorSelector.module.css'

const ProductColorSelector = ( { color, setSelectColor, colorSelected, setColor } ) => {

  const handleClick = () => {
    setColor(color.titulo)
    setSelectColor(color.img_src);
  }

  return (
    <div className='mx-3 d-flex-none' role='button' onClick={handleClick}>
      <img
        className={colorSelected === color.titulo ? styles.img_active : styles.img}
        src={color.img_src_cover}
      />
    </div>
  )
}

export default ProductColorSelector