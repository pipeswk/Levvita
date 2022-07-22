import { useState } from 'react'
import styles from './ProductSlider.module.css';
import ProductOptions from '../ProductOptions/ProductOptions';
import useLevvita from '../../Hooks/useLevvita';

const ProductSlider = ( { colores, sizes } ) => {

    const {
        selectColor,
        setSelectColor,
        colorSelected,
        setColor,
        selectSize,
        setSelectSize
    } = useLevvita();

  return (
    <div className='d-block text-center'>
        <img className={`${styles.image} img-fluid`} src={selectColor} alt="product" />
        <div className='d-md-none'>
            <ProductOptions
                colores={colores}
                sizes={sizes}
                setSelectColor={setSelectColor}
                colorSelected={colorSelected}
                setColor={setColor}
                selectSize={selectSize}
                setSelectSize={setSelectSize}
            />
        </div>
    </div>
  )
}

export default ProductSlider