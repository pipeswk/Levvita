import React from 'react'
import CategoriaInicio from '../CategoriaInicio/CategoriaInicio'
import HorizontalWrapper from '../HorizontalWrapper/HorizontalWrapper'

const CategoriasInicio = () => {
  return (
    <div className='mt-4'>
        <h2 className='text-center'>¿Para quien compras?</h2>
        {/* //TODO: Mapear con la base de datos */}
        <HorizontalWrapper>
          <CategoriaInicio texto={'Hombre'} />
          <CategoriaInicio texto={'Mujer'} />
          <CategoriaInicio texto={'Niño'} />
          <CategoriaInicio texto={'Niña'} />
        </HorizontalWrapper>
    </div>
  )
}

export default CategoriasInicio