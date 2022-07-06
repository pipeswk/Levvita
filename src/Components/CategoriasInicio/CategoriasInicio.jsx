import React from 'react'
import CategoriaInicio from '../CategoriaInicio/CategoriaInicio'
import HorizontalWrapper from '../HorizontalWrapper/HorizontalWrapper'

const CategoriasInicio = ( { type, title, categorias } ) => {

  return (
    <div className='mt-4'>
        <h2 className='text-center'>{title}</h2>
        <HorizontalWrapper>
          {categorias.map( (categoria, index) => (
            <CategoriaInicio
              key={index}
              type={type}
              categoria={categoria}
            />
          ))}
        </HorizontalWrapper>
    </div>
  )
}

export default CategoriasInicio