import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './Slide.module.css'

const Slide = ( { slide } ) => {

    const { img_movil_src, img_src, to_url } = slide;

  return (
    <SplideSlide>
        {/* Oculto en pequeñas pantallas */}
        <div className={`${styles.imageDesktop} d-none d-lg-block`}>
            <img className={`img-fluid ${styles.img}`} src={img_src} alt="Image 1"/>
        </div>
        {/* Oculto en grandes pantallas */}
        <div className='d-lg-none' >
            <img src={img_movil_src} alt="Image 1"/>
        </div>
    </SplideSlide>
  )
}

//TODO: Enlazar to_url

export default Slide