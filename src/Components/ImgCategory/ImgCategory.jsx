import React from 'react'
import styles from './ImgCategory.module.css'

const ImgCategory = ( { data } ) => {

    const image = data.filter( item => item.active === true );

  return (
    <div>
        <img src={image[0].img_src} className={`img-fluid ${styles.img}`} alt='...' />
    </div>
  )
}

export default ImgCategory