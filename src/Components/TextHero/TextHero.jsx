import React from 'react'

const TextHero = ( { titulo, descripcion, boton1, boton2 } ) => {
  return (
    <>
        <h1 className="display-5 fw-bold lh-1 mb-3">{titulo}</h1>
        <p className="lead">{descripcion}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {boton1 && (
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">{boton1}</button>
            )}
            {boton2 && (
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">{boton2}</button>
            )}
        </div>
    </>
  )
}

export default TextHero