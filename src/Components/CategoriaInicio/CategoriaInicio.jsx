import React from 'react'
import styles from './CategoriaInicio.module.css'
import { useRouter } from 'next/router'

const CategoriaInicio = ( { type, categoria } ) => {

  const { title, img_src, to_url } = categoria
  const router = useRouter()

  const handleClick = () => {
    if (type === 'subcategory') {
      console.log('Subcategoría')
    } else {
      router.push(to_url);
    }
  }

  return (
    <div className='mx-3 d-flex-none' role='button' onClick={handleClick}>
      <img className={styles.circularImg} src={img_src} alt="Imagen Categoria" />
      <p className='text-center'>{title}</p>
    </div>
  )
}

//TODO: Enlace a to_url

export default CategoriaInicio