import React from 'react'
import styles from './Card.module.css'

const Card = ( { data, movil, tablet, compu } ) => {

    const mov = 12/movil;
    const tab = 12/tablet;
    const pc = 12/compu;
    const { title, price, main_img, comparative_price } = data;

  return (
    <div className={`col-${mov} col-md-${tab} col-lg-${pc}`}>
       <div className={`card mb-4 position-relative ${styles.card}`} role='button' >
            <img src={main_img} className={`card-img-top img-fluid ${styles.img}`} alt='...' />
            <div className='card-body'>
                <h5 className={`card-title ${styles.title}`}>{title}</h5>
                <div className='d-flex gap-2'>
                    <p className='card-text fw-bold text-primary'>{price}</p>
                    <p className='card-text text-decoration-line-through fw-bold text-danger'>{comparative_price}</p>
                </div>
            </div>
            <span className={`position-absolute top-0 start-50 translate-middle badge p-2 ${styles.badge}`}>Oferta</span>  
        </div>         
    </div>
  )
}

export default Card