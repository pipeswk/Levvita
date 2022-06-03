import React from 'react'
import styles from './HorizontalWrapper.module.css'

const HorizontalWrapper = ( { children } ) => {
  return (
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className={`col-12 w-100 d-flex justify-content-md-center ${styles.horizontalScrolling_Wrapper}`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default HorizontalWrapper