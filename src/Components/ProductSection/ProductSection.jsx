import React from 'react'
import DesktopSection from '../DesktopSection/DesktopSection'
import MovilSection from '../MovilSection/MovilSection'

const ProductSection = ( { seccion } ) => {
  return (
    <>
        {/* Version Movil */}
        <MovilSection
            imgPosition={seccion.imgMovil_position}
            textIsList={seccion.text_is_a_list}
            titulo={seccion.titulo}
            imagen={seccion.img_src}
            texto={seccion.texto}
            list={seccion.list}
        />
        {/* Version Desktop */}
        <DesktopSection
            imgPosition={seccion.imgDesktop_position}
            textIsList={seccion.text_is_a_list}
            titulo={seccion.titulo}
            imagen={seccion.img_src}
            texto={seccion.texto}
            list={seccion.list}  
        />
    </>
  )
}

export default ProductSection