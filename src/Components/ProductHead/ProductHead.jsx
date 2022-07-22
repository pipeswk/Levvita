import { useState, useEffect } from 'react'
import styles from './ProductHead.module.css'

const ProductHead = ( { title } ) => {

    const [number, setNumber] = useState('')

    const randomNumber = () => {
        return Math.random() * (5 - 4.7) + 4.7;
    }

    useEffect(() => {
      setNumber(randomNumber().toFixed(1));  
    }, [])
    
    
  return (
    <div>
        <h1 className={styles.title}>{title}</h1>
        <p>{`⭐⭐⭐⭐⭐ [${number} / 5]`}</p>
    </div>
  )
}

export default ProductHead