import React from 'react'
import Card from '../Card/Card';

const Reticula = () => { 

  return (
    <div className='container'>
        <h1 className='fw-bold d-flex justify-content-center mb-5 fs-1'>Novedades</h1>
        <div className='row'>
            {/* //TODO: ITERAR CON LA BASE DE DATOS */}
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
            <Card
                movil={2}
                tablet={3}
                compu={4}
            />
        </div>
    </div>
  )
}

export default Reticula