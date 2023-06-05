import React from 'react'
import useLevvita from '../../Hooks/useLevvita'
import ProductOptions from '../ProductOptions/ProductOptions'

const ProductModal = ( { options } ) => {

    const {
        setSelectColor,
        colorSelected,
        setColor,
        selectSize,
        setSelectSize
    } = useLevvita();

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Elige color y talla:</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <ProductOptions
                        colores={options.colores}
                        sizes={options.tallas}
                        setSelectColor={setSelectColor}
                        colorSelected={colorSelected}
                        setColor={setColor}
                        selectSize={selectSize}
                        setSelectSize={setSelectSize}
                    />
                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Guardar cambios</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductModal