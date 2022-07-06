import React from 'react'
import styles from './Card.module.css'

const Card = ( { data, movil, tablet, compu } ) => {

    const mov = 12/movil;
    const tab = 12/tablet;
    const pc = 12/compu;

  return (
    <div className={`col-${mov} col-md-${tab} col-lg-${pc}`}>
       <div className='card mb-4 position-relative' role='button' >
            <img src='/img/Zapatillas-de-correr-para-hombre-y-Mujer-zapatos-vulcanizados-de-malla-transpirable-ligeros-color-blanco-gran.jpg_640x640_1_480x480.webp' className={`card-img-top img-fluid ${styles.img}`} alt='...' />
            <div className='card-body'>
                <h5 className='card-title fs-5'>Twizz® 2022 - Sneakers Ultra Confortables</h5>
                <div className='d-flex gap-2'>
                    <p className='card-text fw-bold text-primary'>$119.900</p>
                    <p className='card-text text-decoration-line-through fw-bold text-danger'>$219.800</p>
                </div>
            </div>
            <span className={`position-absolute top-0 start-50 translate-middle badge p-2 ${styles.badge}`}>Oferta</span>  
        </div>         
    </div>
  )
}

export default Card