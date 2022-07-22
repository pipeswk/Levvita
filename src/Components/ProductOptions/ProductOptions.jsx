import { useState } from 'react'
import ProductColorSelector from '../ProductColorSelector/ProductColorSelector';
import HorizontalWrapper from '../HorizontalWrapper/HorizontalWrapper';
import ProductSizeSelector from '../ProductSizeSelector/ProductSizeSelector';
import ProductInputQ from '../ProductInputQ/ProductInputQ';

const ProductOptions = ( { children, colores, sizes, setSelectColor, colorSelected, setColor, selectSize, setSelectSize } ) => {


  return (
    <>
        <h2 className='mt-2'>Selecciona el color</h2>
        <div className='d-flex justify-content-center'>
            <HorizontalWrapper>
                {colores.map((color, index) => (
                    <ProductColorSelector
                        key={index}
                        color={color}
                        setSelectColor={setSelectColor}
                        colorSelected={colorSelected}
                        setColor={setColor}
                    />
                ))}
            </HorizontalWrapper>
        </div>
        <h2 className='my-3'>Selecciona la talla</h2>
        <div className='d-flex justify-content-center'>
            <HorizontalWrapper>
                {sizes.map((size, index) => (
                    <ProductSizeSelector
                        key={index}
                        size={size}
                        selectSize={selectSize}
                        setSelectSize={setSelectSize}
                    />
                ))}
            </HorizontalWrapper>
        </div>
        <div className='container'>
            <div className='row my-3'>
                <div className='col-4'>
                    <ProductInputQ />
                </div>
                <div className='col-8'>
                    {children}
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProductOptions