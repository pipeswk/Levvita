import { useState } from 'react'
import styles from './CategoriaInicio.module.css'
import { useRouter } from 'next/router'
import useLevvita from '../../Hooks/useLevvita'

const CategoriaInicio = ( { type, categoria, setCatSeleccionada, catSeleccionada } ) => {
  const { title, img_src, to_url } = categoria
  const router = useRouter()
  const { 
    setOffListenerCategory,
    setOffListenerSubcategory, 
    getProductsCategory, 
    getProductsSubcategory 
  } = useLevvita();
  

  const handleClick = () => {
    if (type === 'subcategory') {
      setCatSeleccionada(title);
      if (title !== 'Todo') {
        setOffListenerCategory();
        getProductsSubcategory(title);
      } else {
        setOffListenerSubcategory();
        getProductsCategory();
      }
    } else {
      router.push(to_url);
    }
  }

  return (
    <div className='mx-3 d-flex-none' role='button' onClick={handleClick}>
      <img className={type === 'subcategory' && catSeleccionada === title?styles.circularImg_active:styles.circularImg} src={img_src} alt="Imagen Categoria" />
      <p className={`${type === 'subcategory' && catSeleccionada === title?styles.title_active:styles.title} text-center`}>{title}</p>
    </div>
  )
}

//TODO: Enlace a to_url

export default CategoriaInicio