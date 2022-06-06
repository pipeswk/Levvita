import React from 'react'
import styles from './CategoriaInicio.module.css'

const CategoriaInicio = ( { categoria } ) => {

  const { title, img_src, to_url } = categoria

  return (
    <div className='mx-3 d-flex-none'>
      <img className={styles.circularImg} src={img_src} alt="Imagen Categoria" />
      <p className='text-center'>{title}</p>
    </div>
  )
}

//TODO: Enlace a to_url

export default CategoriaInicio