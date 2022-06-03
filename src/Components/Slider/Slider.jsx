import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './Slider.module.css'

const Slider = () => {
  return (
    <Splide
        options={{
            type: 'loop',
            autoplay: true,
            width: '100%',
            rewind: true,
            gap: '1rem'
        }}
    >
        <SplideSlide>
            {/* Oculto en pequeñas pantallas */}
            <div className={`${styles.imageDesktop} d-none d-lg-block`}>
                <img className={`img-fluid ${styles.img}`} src="/img/¿puedo-hacer-pedidos-por-anticipado-de-productos-nike-ayuda-de-nike.jpg" alt="Image 1"/>
            </div>
            {/* Oculto en grandes pantallas */}
            <div className='d-lg-none' >
                <img src="/img/Zapatillas-de-correr-para-hombre-y-Mujer-zapatos-vulcanizados-de-malla-transpirable-ligeros-color-blanco-gran.jpg_640x640_1_480x480.webp" alt="Image 1"/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='d-lg-none' >
                <img src="/img/2.webp" alt="Image 1"/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='d-lg-none' >
                <img src="/img/3.webp" alt="Image 1"/>
            </div>
        </SplideSlide>
    </Splide>
  )
}

export default Slider