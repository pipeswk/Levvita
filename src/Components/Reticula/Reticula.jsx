import React from 'react'
import Card from '../Card/Card';

const Reticula = ( { data, title } ) => { 

  console.log(data);

  return (
    <div className='container'>
        <h1 className='fw-bold d-flex justify-content-center mb-5 fs-1'>{title}</h1>
        <div className='row'>
            {/* //TODO: ITERAR CON LA BASE DE DATOS */}
            {data.map(product => (
              <Card
                key={product.id}
                data={product}
                movil={2}
                tablet={3}
                compu={4}
            />
            ))}
        </div>
    </div>
  )
}

export default Reticula