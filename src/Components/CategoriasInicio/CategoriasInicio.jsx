import { useState } from 'react'
import CategoriaInicio from '../CategoriaInicio/CategoriaInicio'
import HorizontalWrapper from '../HorizontalWrapper/HorizontalWrapper'

const CategoriasInicio = ( { type, title, categorias } ) => {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todo');

  return (
    <div className='mt-4'>
        <h2 className='text-center'>{title}</h2>
        <HorizontalWrapper>
          {categorias.map( (categoria, index) => (
            <CategoriaInicio
              key={index}
              type={type}
              categoria={categoria}
              setCatSeleccionada={setCategoriaSeleccionada}
              catSeleccionada={categoriaSeleccionada}
            />
          ))}
        </HorizontalWrapper>
    </div>
  )
}

export default CategoriasInicio