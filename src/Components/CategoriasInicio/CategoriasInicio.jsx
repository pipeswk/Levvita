import React from 'react'
import CategoriaInicio from '../CategoriaInicio/CategoriaInicio'
import HorizontalWrapper from '../HorizontalWrapper/HorizontalWrapper'

const CategoriasInicio = ( { categorias } ) => {

  return (
    <div className='mt-4'>
        <h2 className='text-center'>¿Para quien compras?</h2>
        {/* //TODO: Mapear con la base de datos */}
        <HorizontalWrapper>
          {categorias.map( (categoria, index) => (
            <CategoriaInicio
              key={index}
              categoria={categoria}
            />
          ))}
        </HorizontalWrapper>
    </div>
  )
}

export default CategoriasInicio