import styles from './StickyFooter.module.css'

const StickyFooter = ( { options, modalOn, setModalOn } ) => {

    const openModal = () => {
        setModalOn(!modalOn);
    };

  return (
    <div className={`${styles.sticky} d-md-none`}>
        <button
            className={`${styles.buyButton} mt-2`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            COMPRAR AHORA - PAGAR AL RECIBIR 🏠
        </button>
    </div>
  )
}

export default StickyFooter